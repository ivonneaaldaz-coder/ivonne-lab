const XLSX = require('xlsx')
const fs = require('fs')
const path = require('path')

function clean(val) {
  if (val === null || val === undefined) return ''
  const s = String(val).trim()
  if (s === 'nan' || s === 'NaN' || s === 'undefined') return ''
  return s
}

function sheetToText(sheet) {
  if (!sheet['!ref']) return ''
  const lines = []
  const range = XLSX.utils.decode_range(sheet['!ref'])
  for (let r = range.s.r; r <= range.e.r; r++) {
    const cells = []
    for (let c = range.s.c; c <= range.e.c; c++) {
      const addr = XLSX.utils.encode_cell({ r, c })
      const cell = sheet[addr]
      const val = cell ? clean(cell.v) : ''
      if (val) cells.push(val)
    }
    if (cells.length > 0) lines.push(cells.join(' | '))
  }
  return lines.join('\n')
}

function parseCV(xlsxPath) {
  const workbook = XLSX.readFile(xlsxPath)
  const sections = []
  const skipSheets = ['Intro']
  const sheetNames = workbook.SheetNames.filter(n => !skipSheets.includes(n))
  for (const name of sheetNames) {
    const sheet = workbook.Sheets[name]
    const text = sheetToText(sheet)
    if (text.trim()) sections.push(`## ${name}\n${text}`)
  }
  return sections.join('\n\n')
}

module.exports = { parseCV }

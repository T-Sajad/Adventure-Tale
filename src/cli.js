import { readFileSync, writeFileSync } from 'node:fs';
import parse  from './parser.js'
// read input file in
//TOD0: write conditional check if the file is not markdown.




const path = process.argv[2]
console.log('reading input from: ', path)

const storyMarkdown = readFileSync(path,'utf8')

// parse file to json
const storyJson = parse(storyMarkdown)

// write file
writeFileSync('./story.json', JSON.stringify(storyJson, null, 2))


import { readFileSync, writeFileSync } from 'node:fs';
import parse  from './parser.js'

// read input file in
//TODO: write conditional check if the file is not markdown.
const path = process.argv[2]
console.log('reading input from: ', path)

const storyMarkdown = readFileSync(path,'utf8')

// parse file to json
const storyJson = parse(storyMarkdown)

//what file path do i need to write to?
// 1) look at the input path
// 2) conert the .md file extension to a .json file extension

const outputPath =  path.replace('.md','.json')

// write file to disk
writeFileSync(outputPath, JSON.stringify(storyJson, null, 2))


// npm parse /tmp/my-story.md
// input /tmp/my-story.md
// output /tmp/my-story.json


// npm parse src/data/myStory.md
// input src/data/myStory.md
// output src/data/myStory.json
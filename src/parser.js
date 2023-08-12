// the function takes story text as input and it returns story.json
const LINE_BREAK_PATTERN = "\n"

const source = `#page_a
a
b
`


function parse (source){
  const storyJson = []
  // split the source string into lines
  const x = source.split(LINE_BREAK_PATTERN)
  let page;
  
  
  for(const line of x){
    const trimmedLine = line.trim()
    // if the line starts with =
    // trim every whitespace and trailing to every line
    //
    if(trimmedLine.startsWith('#')){
        // create a new page object
        page = {id:trimmedLine.substring(1)}
        // add it to the storyJson array
        storyJson.push(page)
      }
      else if(trimmedLine.startsWith('*')){
        // parse a link
      } 
      else if (trimmedLine) {
        // parse content
        if (!page) {
          throw new Error('content does not belong to a page Title')
        }
        if(page.content){
          page.content += LINE_BREAK_PATTERN + trimmedLine

          
        }else{
          page.content = trimmedLine

        }
      }
          
    }
    return storyJson
}

export default parse


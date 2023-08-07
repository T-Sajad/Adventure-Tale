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
        // if the line starts with = 
        if(line.startsWith('#')){
            // create a new page object
            page = {id:line.substring(1)}
            // add it to the storyJson array
            storyJson.push(page)
          }
          else if(line.startsWith('*')){
            // parse a link
          } 
          else if (line) {
            // parse content
            if (!page) {
              throw new Error('content does not belong to a page Title')
            }
            if(page.content){
             page.content += LINE_BREAK_PATTERN + line
  
              
            }else{
              page.content = line

            }
          }
          
    }
    return storyJson
}

export default parse


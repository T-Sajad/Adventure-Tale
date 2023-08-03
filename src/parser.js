// the function takes story text as input and it returns story.json
const LINE_BREAK_PATTERN = "\n"

function parse (source){
    const storyJson = []
    // split the source string into lines
    const x = source.split(LINE_BREAK_PATTERN)
    console.log(x)
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
          const targetPage = page;
          //we need to add the content to the page 
          targetPage.content = line
        }
    }
    return storyJson
}

export default parse
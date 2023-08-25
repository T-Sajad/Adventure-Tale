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
        page = {
          id:trimmedLine.substring(1),
          links:[]
        }

        // add it to the storyJson array
        storyJson.push(page)
      }
      else if(trimmedLine.startsWith('*')){
        // 1) identify the label and target
        const rawLinkText = trimmedLine.substring(1);
        const split2 = rawLinkText.split('|'); 
        const label = split2[0].trim()
        const target = split2[1].trim()
        
        // 2) create a link object
        const link ={ label, target };

        // 3) add the link to the page
        page.links.push(link)
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


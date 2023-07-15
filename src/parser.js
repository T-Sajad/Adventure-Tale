// the function takes story text as input and it returns story.json
const LINE_BREAK_PATTERN = "\n"

function parse (source){
    const storyJson = []

    // split the source string into lines
    const x = source.split(LINE_BREAK_PATTERN)
    console.log(x)
    for(const line of x){
        // if the line starts with = 
        if(line.startsWith('=')){
            // each line is a string of the format
            // =<page_id>

            // create a new story object
            const story_Obj = {id:line.substring(1)}


            // add it to the storyJson array
            storyJson.push(story_Obj)
           

        }

    }
    return storyJson

}




export default parse
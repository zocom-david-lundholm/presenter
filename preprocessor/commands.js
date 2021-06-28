const COMMAND_CHARACTERS = "::"

module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
      let inColumn = false
      return resolve(
        markdown
          .split('\n')
          .map((line, index) => {
            const instructionLine = line.match( new RegExp(`^.*${COMMAND_CHARACTERS}([a-zA-Z-]*)$` ) )
            if (!instructionLine) return line;
            const instruction = instructionLine[1]
            if(instruction.startsWith("bg-")){
                return `<!-- .slide: class="${instruction.replace("bg-","")}"-->`
            }else if(instruction.startsWith("layout-")){
                return `<!-- .slide: class="${instruction.replace("layout-","")}"-->`
            }else if(instruction == 'column'){
              let result = inColumn ? "</div><div>\n" : '<div>\n'
              inColumn = true
              return result
            }else if(instruction == "fragment"){
                return line.replace("::fragment", "<!-- .element: class=\"fragment\" -->")
            }else if(inColumn && line.startsWith("---")){
              inColumn = false
              return '</div>\n' + line + '\n'
            }else{
                return line
            }
          })          
          .join('\n')
      );
    });
  };
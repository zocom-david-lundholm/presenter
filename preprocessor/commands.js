const COMMAND_CHARACTERS = "::"

module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
      return resolve(
        markdown
          .split('\n')
          .map((line, index) => {
            const instructionLine = line.match( new RegExp(`^.*${COMMAND_CHARACTERS}([a-zA-Z-]*)$` ) )
            if (!instructionLine) return line;
            const instruction = instructionLine[1]
            if(instruction.startsWith("bg-")){
                return `<!-- .slide: class="${instruction.replace("bg-","")}"-->`
            }else if(instruction == "fragment"){
                return line.replace("::fragment", "<!-- .element: class=\"fragment\" -->")
            }else{
                return line
            }
          })
          .join('\n')
      );
    });
  };
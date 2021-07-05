const COMMAND_CHARACTERS = "::"
let inColumn = false
let inFragmentedList = false

const isInstructionLine = line => line.match( new RegExp(`^.*${COMMAND_CHARACTERS}.+$` ) )
const isBulletListLine = line => line.trim().match(/^(\*|\d+\.|-).*/)

const parseLine = line => {
  if(inFragmentedList){
    if(isBulletListLine(line) ){
      return line +  "<!-- .element: class=\"fragment\" -->"
    }else{
      inFragmentedList = false
    }
  }
  if(inColumn && line.startsWith("---")){
    inColumn = false
    return '</div>\n' + line + '\n'
  }
  if (!isInstructionLine(line)) return line;

  const instruction = line.replace(COMMAND_CHARACTERS, "")
  const [directive, variant, mode] = instruction.split("-")
  
  switch(directive){
    case 'bg':              
      return `<!-- .slide: class="${variant} ${mode ? mode : ''}"-->`
    case 'layout':
      return `<!-- .slide: data-layout="${variant}-${mode}"-->`
    case 'transition':
      return `<!-- .slide: data-transition="${variant}"-->`
    case 'column':
      const markup = inColumn ? "</div><div>\n" : '<div>\n'
      inColumn = true
      return markup
    case 'fragmented':
      inFragmentedList = true;
      return ""
    case 'image':
      return `<!-- .slide: data-background-image="${variant}"-->`
  }
}

module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {      
      return resolve(
        markdown
          .split('\n')          
          .map(parseLine)          
          .join('\n')
      );
    });
  };
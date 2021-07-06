# ZoCom Presenter

## A Reveal.JS + Reveal.MD CLI Wrapper

## Installation

`npm install --global @zocom/presenter`

## Usage

### Present a markdown
`npx presenter my-presentation.md`

### Live Reload
`npx presenter my-presentation.md --watch`

### Print to PDF
`npx presenter my-presentation.md --print my-presentation.pdf`

## Markdown Presentations

### Markdown
Most of the markdown syntax is supported in reveal-md. 
Read githubs guide for markdown here [https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Slides

* `---` to separate slides
* `----` to separate vertical slides

```markdown
# Slide One
---
# Slide Two
```

### Directives
To customize the slide according to ZoCom styles the following directives can be used

#### Backgrounds
* `::bg-intro`
* `::bg-discussion`
* `::bg-task`
* `::bg-quote`
* `::bg-code`
* `::bg-complex`
* `::bg-image-file.png`

```markdown
::bg-intro
# Introduction to Presenter
---
::bg-task
# Instructions
Do this, then that, then that.
```

Each background directive can also be customized with a pre defined color.
* `::bg-intro-blue`
* `::bg-task-black`
* `::bg-discussion-pink`

Available colors are 
* red   
* yellow
* green 
* blue  
* pink  
* purple
* black 
* gray 


#### Fragmented lists

If you want each bullet point to be presented on key press. Add `::fragmented` at the top of the list.

```markdown
::fragmented
* Bullet One
* Bullet Two
* Bullet Three
```

#### Layout

By default slides have a single column layout, but you can add two or three column-layout.

```markdown
::layout-two-column
::column
# Left side
::column
# Right Side
```


## Further reading

* [https://revealjs.com/](https://revealjs.com/)
* [https://github.com/webpro/reveal-md](https://github.com/webpro/reveal-md)

## Contributing
Something missing from this README? A feature you want to add? Is the code incomprehensible? Send a pull request!
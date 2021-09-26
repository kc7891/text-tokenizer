const $text = document.querySelector('#text')
const $paste = document.querySelector('#paste')
const $count = document.querySelector('#count')
const $parseButton = document.querySelector('#parse')
const $result = document.querySelector('#result')
const $clear = document.querySelector('#clear')

const onPaste = () => {
  navigator.clipboard.readText().then(
    clipText => $text.value = clipText);
}

const onCopy = (value) => {
  navigator.clipboard.writeText(value)
}

const onClearResult = () => {
  $result.innerHTML = ''
}

const onClear = () =>{
	onClearResult()
  $text.value = ''
}

const onParse = () => {
  const count = $count.value
  const regex = new RegExp(`.{1,${count}}`,'g')
  const text = $text.value
  const texts = text.match(regex)

  const results = texts.map((value) => {
    const $block = document.createElement('div')
    const $input = document.createElement('input',{
      type: 'text'
    })
    const $button = document.createElement('button')

    $input.value = value
    $block.appendChild($input)

    $button.addEventListener('click',() => onCopy(value))
    $button.innerText = 'copy'
    $block.appendChild($button)
    return $block
  })
  
  onClearResult()
  results.forEach((element) => {
	  $result.appendChild(element)
  })

}

$paste.addEventListener('click',onPaste)
$parseButton.addEventListener('click', onParse)
$clear.addEventListener('click',onClear)
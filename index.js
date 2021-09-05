const $text = document.querySelector('#text')
const $count = document.querySelector('#count')
const $parseButton = document.querySelector('#parse')
const $result = document.querySelector('#result')
const $clear = document.querySelector('#clear')

const onClear = () =>{
	$result.innerHTML = ''
}

const onParse = () => {
  const count = $count.value
  const regex = new RegExp(`.{1,${count}}`,'g')
  const text = $text.value
  const texts = text.match(regex)
  console.log(text,texts, regex)

  const results = texts.map((value) => {
	const $block = document.createElement('div')
	const $input = document.createElement('input',{
		type: 'text'
	})
	$input.value = value
	$block.appendChild($input)
	return $block
  })
  
  onClear()
  results.forEach((element) => {
	  $result.appendChild(element)
  })

}

$parseButton.addEventListener('click', onParse)
$clear.addEventListener('click',onClear)
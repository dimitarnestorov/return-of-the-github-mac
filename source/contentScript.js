function handleLoad() {
	if (document.readyState !== 'complete') return

	document.removeEventListener('readystatechange', handleLoad)

	Array.from(
		document.querySelectorAll(`a[href^="x-github-client\\3A \/\/openRepo\/https\\3A \/\/github\.com\/"]`),
	).forEach((anchor) => {
		anchor.href = `github-mac:\/\/openRepo\/${anchor.href.substr(27)}`
	})
}

if (document.readyState === 'complete') {
	handleLoad()
} else {
	document.addEventListener('readystatechange', handleLoad)
}

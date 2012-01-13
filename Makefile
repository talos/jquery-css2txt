all:
	uglifyjs jquery-css2txt.js > jquery-css2txt.min.js

clean:
	rm jquery-css2txt.min.js

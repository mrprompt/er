# er

[![Build
Status](https://travis-ci.org/mrprompt/er.svg?branch=master)](https://travis-ci.org/mrprompt/er)
[![Code
Climate](https://codeclimate.com/github/mrprompt/er/badges/gpa.svg)](https://codeclimate.com/github/mrprompt/er)
[![Test
Coverage](https://codeclimate.com/github/mrprompt/er/badges/coverage.svg)](https://codeclimate.com/github/mrprompt/er/coverage)
[![Issue
Count](https://codeclimate.com/github/mrprompt/er/badges/issue_count.svg)](https://codeclimate.com/github/mrprompt/er)

Test result from Regular Expression

## Install

```
npm install -g er-cli
```

## Usage

```
er-cli <regexp> <text>
```

## Sample
```
er-cli [0-9]+ 'Born in 1982 and...'
```

Output
```
1982
```

## License
GPL-3.0

# wagtail-smartquotes

A tiny javascript snippet to convert "straight punctuation" into “curly punctuation”
in your wagtail page editor.

## Why do I need smartquotes?

[http://smartquotesforsmartpeople.com/](http://smartquotesforsmartpeople.com/)

## Punctuation replacements

- 'Single quotes' to ‘Single quotes’
- "Double quotes" to “Double quotes”
- Apostr'phes to Apostr’phes
- em--dash to em—dash

## Installation

### Install via pip

```
pip install git+https://github.com/nhsuk/wagtail-smartquotes@0.1.0
```

This package is a pre-release. When fully released it will be published to PyPi.

### Add to your INSTALLED_APPS

```python
INSTALLED_APPS = [
  ...

  'wagtailsmartquotes',

  ...
]
```

That's it!

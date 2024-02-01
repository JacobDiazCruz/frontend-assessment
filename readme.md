Question: Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

Answer:
the result is banana because the conversion of the string 'a' is NaN when using the unary plus (+), which leads to the unexpected concatenation of 'NaNa'.

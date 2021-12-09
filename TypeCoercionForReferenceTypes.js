// 1. null + undefined;  we will have NaN because of undefined. And the result's type will be number;
// 2. null + true; We will have like 0 + 1 = 1, which type is number;
// 3. null + false; will be 0 + 0 = 0;
// 4. null + 3; will be 3, type: number;
// 5. null + NaN; like 0 + NaN = NaN, where type of NaN is number;
// 6. null + 'hello'; we will have concatination of null and hello, like nullhello with string type;
// 7. null + a + b + c + d + e + f; because of our letter is not into string and it is not declared before, we will have error that our letter not defined for first letter;
// 8. undefined + true; we will have NaN with number type, because of undefined + 1; 
// 9. undefined + false; we will have NaN with number type;
// 10. undefined + 5; will be NaN;
// 11. undefined + NaN; will be NaN;
// 12. undefined + 'hello'; we will have concat of to words like undefinedhello;
// 13. undefined + a + b + c + d + e + f; output will be error that our first letter is not defined;
// 14. true + false; output: 1 + 0 = 1 with number type;
// 15. true + 2; output: 3, type: number;
// 16. true + NaN; output: NaN;
// 17. true + hello; output: truehello, concatination, type: string;
// 18. true + a + b + c + d + e + f; will be ReferanceError: a is not defined;
// 19. false + 4; output: 0 + 4 = 4, type: number;
// 20. false + NaN; output: NaN;
// 21. false + 'hell0'; output: falsehello;
// 22. false + a + b + c + d + e + f; output: ReferanceError: a is not define.
// 23. 5 + 3; output: 8; tpye: number;
// 24. 5 + NaN; output: NaN, type: number; comparison with a NaN always returns an unordered result even when comparing with itself.
// 25. 5 + 'hello'; output 5hello, type: string;
// 26. 5 + a + b + c + d + e + f; output: ReferenceError: a is not defined;
// 27. 'hello' + NaN; we will have concatination;
// 28. 'hello' + a + b + c + d + e + f; we can mix it with concatination but there are not declared items.


// 29. +null; output: 0; type: number;
// 30. +undefined; output: it coudn't type conversion will print NaN wich type is number;
// 31. +true; we wil have type convercion to 1;
// 32. +false; output 0, type from boolean to number;
// 33. +'hello'; output: NaN, type: number, it can't converse letters to num;
// 34. +'234'; output: 234, type: number;
// 35. +'234.32e3'; output will be all numbers from string and change type to number;
// 36. +(/google.com/); output: NaN;  type: number;
// 37. +[]; the output will be 0; A StringNumericLiteral that is empty or contains only white space is converted to +0
// 38. +[2]; output: 2, type: number;
// 39. +[2,3]; output: NaN, type: number;
// 40. +(function() { }); output: NaN, type: number;
// 41. +(a); we will have an error that is not defined;

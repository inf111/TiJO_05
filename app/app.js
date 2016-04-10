(function () {
    'use strict';

    window.app = {
        isPalindrome: function (str) {
            var strTemp = str.toLowerCase(),
                strLength = strTemp.length;
            if (str === '') {
                return false;
            }
            var halfLength = (strLength % 2 === 0) ? (strLength / 2) : ((strLength - 1) / 2);
            for (var i = 0; i < halfLength; i++) {
                if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
                    return false;
                }
            }
            return true;
        },

        vowelCount: function (str) {
            var vowelList = 'aeiouyAEIOUY',
                vovCount = 0;
            for (var i = 0, strLength = str.length; i < strLength; i++) {
                if (vowelList.indexOf(str[i]) !== -1) {
                    vovCount++;
                }
            }
            return vovCount;
        },
        generateMessage: function (text) {
            var palindrome = this.isPalindrome(text);
            var vowel = this.vowelCount(text);
            if (text.length > 0) {
                return {vowel: vowel, palindrome: palindrome};
            } else {
                throw new Error('Empty string!');
            }
        }
    };

})();

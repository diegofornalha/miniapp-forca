"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ "webpack/container/remote/react-confetti");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/config */ "./src/constants/config.ts");
/* harmony import */ var _constants_questions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/questions */ "./src/constants/questions.ts");
/* harmony import */ var _constants_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/keyboard */ "./src/constants/keyboard.ts");
/* harmony import */ var _hooks_useGameLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useGameLogic */ "./src/hooks/useGameLogic.ts");
/* harmony import */ var _hooks_useKeyboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useKeyboard */ "./src/hooks/useKeyboard.ts");
/* harmony import */ var _components_GameStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/GameStatus */ "./src/components/GameStatus/index.tsx");
/* harmony import */ var _components_FinalScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/FinalScreen */ "./src/components/FinalScreen/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/// <reference types="@tarojs/taro" />













var Index = function Index() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setNavigationBarTitle({
      title: _constants_config__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.TITLE
    });
  }, []);
  var _useGameLogic = (0,_hooks_useGameLogic__WEBPACK_IMPORTED_MODULE_6__.useGameLogic)(),
    state = _useGameLogic.state,
    handleGuess = _useGameLogic.handleGuess,
    restartGame = _useGameLogic.restartGame,
    getMaskedWord = _useGameLogic.getMaskedWord,
    getFinalMessage = _useGameLogic.getFinalMessage;
  var _useKeyboard = (0,_hooks_useKeyboard__WEBPACK_IMPORTED_MODULE_7__.useKeyboard)(handleGuess),
    keyboardState = _useKeyboard.state,
    toggleKeyboard = _useKeyboard.toggleKeyboard;
  var currentQuestionIndex = state.currentQuestionIndex,
    guessedLetters = state.guessedLetters,
    wrongGuesses = state.wrongGuesses,
    showTranslation = state.showTranslation,
    correctCount = state.correctCount,
    gameStatus = state.gameStatus,
    countdown = state.countdown,
    showConfetti = state.showConfetti;
  var windowWidth = keyboardState.windowWidth,
    windowHeight = keyboardState.windowHeight,
    showKeyboard = keyboardState.showKeyboard;

  // Renderiza o confete apenas na versão H5
  var confetti =  false ? /*#__PURE__*/0 : null;
  if (gameStatus === 'finished' || currentQuestionIndex >= _constants_questions__WEBPACK_IMPORTED_MODULE_4__.QUESTIONS.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_FinalScreen__WEBPACK_IMPORTED_MODULE_9__["default"], {
      message: getFinalMessage(),
      correctCount: correctCount,
      totalQuestions: _constants_questions__WEBPACK_IMPORTED_MODULE_4__.QUESTIONS.length,
      countdown: countdown,
      onRestart: restartGame
    });
  }
  var currentQuestion = _constants_questions__WEBPACK_IMPORTED_MODULE_4__.QUESTIONS[currentQuestionIndex];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "game-container",
    children: [confetti, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_GameStatus__WEBPACK_IMPORTED_MODULE_8__["default"], {
      currentQuestion: currentQuestion,
      currentIndex: currentQuestionIndex,
      totalQuestions: _constants_questions__WEBPACK_IMPORTED_MODULE_4__.QUESTIONS.length,
      correctCount: correctCount,
      showTranslation: showTranslation,
      maskedWord: getMaskedWord(),
      isGameOver: gameStatus === 'lost',
      countdown: countdown,
      answer: currentQuestion.answer,
      wrongGuesses: wrongGuesses,
      onKeyPress: handleGuess,
      guessedLetters: guessedLetters,
      disabled: gameStatus !== 'playing',
      showKeyboard: showKeyboard
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "game-content",
      children:  true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
        className: "keyboard-toggle",
        onClick: toggleKeyboard,
        children: showKeyboard ? '⌨️' : '📱'
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/FinalScreen/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/FinalScreen/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/messages */ "./src/utils/messages.ts");
/* harmony import */ var _utils_gameHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/gameHelpers */ "./src/utils/gameHelpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var FinalScreen = function FinalScreen(_ref) {
  var message = _ref.message,
    correctCount = _ref.correctCount,
    totalQuestions = _ref.totalQuestions,
    countdown = _ref.countdown,
    onRestart = _ref.onRestart;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "final-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
      className: "final-message",
      children: message
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
      className: "final-score",
      children: [_utils_messages__WEBPACK_IMPORTED_MODULE_0__.getGameMessages.finalScore, " ", correctCount, " de ", totalQuestions]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
      className: "countdown-text",
      children: [_utils_messages__WEBPACK_IMPORTED_MODULE_0__.getGameMessages.restart, " ", (0,_utils_gameHelpers__WEBPACK_IMPORTED_MODULE_3__.formatTime)(countdown), "..."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "restart-button",
      onClick: onRestart,
      children: _utils_messages__WEBPACK_IMPORTED_MODULE_0__.getGameMessages.playAgain
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (FinalScreen);

/***/ }),

/***/ "./src/components/GameStatus/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/GameStatus/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/messages */ "./src/utils/messages.ts");
/* harmony import */ var _utils_gameHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/gameHelpers */ "./src/utils/gameHelpers.ts");
/* harmony import */ var _Hangman__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Hangman */ "./src/components/Hangman/index.tsx");
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Keyboard */ "./src/components/Keyboard/index.tsx");
/* harmony import */ var _LettersHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LettersHistory */ "./src/components/LettersHistory/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









var GameStatus = function GameStatus(_ref) {
  var currentQuestion = _ref.currentQuestion,
    currentIndex = _ref.currentIndex,
    totalQuestions = _ref.totalQuestions,
    correctCount = _ref.correctCount,
    showTranslation = _ref.showTranslation,
    maskedWord = _ref.maskedWord,
    isGameOver = _ref.isGameOver,
    countdown = _ref.countdown,
    answer = _ref.answer,
    wrongGuesses = _ref.wrongGuesses,
    onKeyPress = _ref.onKeyPress,
    guessedLetters = _ref.guessedLetters,
    disabled = _ref.disabled,
    showKeyboard = _ref.showKeyboard;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    className: "game-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "score-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
        className: "progress-text",
        children: ["Quest\xE3o ", currentIndex + 1, " de ", totalQuestions]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
        className: "score-text",
        children: ["Pontua\xE7\xE3o: ", correctCount, "/", totalQuestions]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "game-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "question-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "question-text",
          children: currentQuestion.question
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Hangman__WEBPACK_IMPORTED_MODULE_2__["default"], {
          wrongGuesses: wrongGuesses
        }), showTranslation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "translation-text",
          children: ["Tradu\xE7\xE3o: ", currentQuestion.translation]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
          className: "word-display",
          children: maskedWord
        }), isGameOver && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "game-over-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
            className: "answer-text",
            children: ["A resposta era: ", answer]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
            className: "countdown-text",
            children: [_utils_messages__WEBPACK_IMPORTED_MODULE_1__.getGameMessages.nextQuestion, " ", (0,_utils_gameHelpers__WEBPACK_IMPORTED_MODULE_8__.formatTime)(countdown), "..."]
          })]
        })]
      }), ( false || showKeyboard) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Keyboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onKeyPress: onKeyPress,
        guessedLetters: guessedLetters,
        currentAnswer: currentQuestion.answer,
        disabled: disabled,
        showKeyboard: showKeyboard
      }),  true && !showKeyboard && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "input-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Input, {
          type: "text",
          className: "letter-input",
          value: inputValue,
          onInput: function onInput(e) {
            var input = e.detail.value.toUpperCase();
            // Processa cada letra da entrada
            input.split('').forEach(function (letter) {
              if (/^[A-Z]$/.test(letter) && !guessedLetters.has(letter)) {
                onKeyPress(letter);
              }
            });
            // Limpa o input
            setInputValue('');
          },
          placeholder: _utils_messages__WEBPACK_IMPORTED_MODULE_1__.getGameMessages.typeLetter
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LettersHistory__WEBPACK_IMPORTED_MODULE_4__["default"], {
          guessedLetters: guessedLetters,
          currentAnswer: currentQuestion.answer
        })]
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (GameStatus);

/***/ }),

/***/ "./src/components/Hangman/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Hangman/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/config */ "./src/constants/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



var Hangman = function Hangman(_ref) {
  var wrongGuesses = _ref.wrongGuesses;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "hangman-display",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "hangman-ascii",
      children: _constants_config__WEBPACK_IMPORTED_MODULE_0__.HANGMAN_PARTS[wrongGuesses].map(function (line, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
          className: "hangman-line",
          children: line
        }, index);
      })
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Hangman);

/***/ }),

/***/ "./src/components/Keyboard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Keyboard/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _constants_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/keyboard */ "./src/constants/keyboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



var Keyboard = function Keyboard(_ref) {
  var onKeyPress = _ref.onKeyPress,
    guessedLetters = _ref.guessedLetters,
    currentAnswer = _ref.currentAnswer,
    disabled = _ref.disabled,
    showKeyboard = _ref.showKeyboard;
  if (!showKeyboard) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "keyboard-section",
    children: _constants_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_LAYOUT.map(function (row, rowIndex) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "keyboard-row",
        children: row.map(function (letter) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: "letter-button ".concat(guessedLetters.has(letter) ? currentAnswer.includes(letter) ? 'correct' : 'wrong' : ''),
            onClick: function onClick() {
              return onKeyPress(letter);
            },
            disabled: guessedLetters.has(letter) || disabled,
            children: letter
          }, letter);
        })
      }, rowIndex);
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Keyboard);

/***/ }),

/***/ "./src/components/LettersHistory/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/LettersHistory/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


var LettersHistory = function LettersHistory(_ref) {
  var guessedLetters = _ref.guessedLetters,
    currentAnswer = _ref.currentAnswer;
  var sortedLetters = Array.from(guessedLetters).sort();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "letters-history",
    children: sortedLetters.map(function (letter) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "letter-history-item ".concat(currentAnswer.includes(letter) ? 'correct' : 'wrong'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          children: letter
        })
      }, letter);
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (LettersHistory);

/***/ }),

/***/ "./src/constants/config.ts":
/*!*********************************!*\
  !*** ./src/constants/config.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: function() { return /* binding */ APP_CONFIG; },
/* harmony export */   HANGMAN_PARTS: function() { return /* binding */ HANGMAN_PARTS; }
/* harmony export */ });
var APP_CONFIG = {
  TITLE: 'Jogo da Forca',
  BACKGROUND_COLOR: '#fff5f0',
  NAV_BAR_STYLE: 'black'
};
var HANGMAN_PARTS = [['  +---+', '  |   |', '      |', '      |', '      |', '      |', '========='], ['  +---+', '  |   |', '  O   |', '      |', '      |', '      |', '========='], ['  +---+', '  |   |', '  O   |', '  |   |', '      |', '      |', '========='], ['  +---+', '  |   |', '  O   |', ' /|   |', '      |', '      |', '========='], ['  +---+', '  |   |', '  O   |', ' /|\\  |', '      |', '      |', '========='], ['  +---+', '  |   |', '  O   |', ' /|\\  |', ' /    |', '      |', '========='], ['  +---+', '  |   |', '  O   |', ' /|\\  |', ' / \\  |', '      |', '=========']];

/***/ }),

/***/ "./src/constants/keyboard.ts":
/*!***********************************!*\
  !*** ./src/constants/keyboard.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_LAYOUT: function() { return /* binding */ KEYBOARD_LAYOUT; }
/* harmony export */ });
/* unused harmony exports ALPHABET, KEYBOARD_CONFIG */
var KEYBOARD_LAYOUT = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M']];
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var KEYBOARD_CONFIG = {
  CONFETTI_PIECES: 200,
  CONFETTI_GRAVITY: 0.3,
  TOAST_DURATION: 2000
};

/***/ }),

/***/ "./src/constants/questions.ts":
/*!************************************!*\
  !*** ./src/constants/questions.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFETTI_DURATION: function() { return /* binding */ CONFETTI_DURATION; },
/* harmony export */   COUNTDOWN_TIME: function() { return /* binding */ COUNTDOWN_TIME; },
/* harmony export */   MAX_WRONG_GUESSES: function() { return /* binding */ MAX_WRONG_GUESSES; },
/* harmony export */   QUESTIONS: function() { return /* binding */ QUESTIONS; }
/* harmony export */ });
var QUESTIONS = [{
  id: "q1",
  question: "How are you?",
  answer: "FINE",
  translation: "Como você está?"
}, {
  id: "q2",
  question: "What is your name?",
  answer: "MY NAME IS",
  translation: "Qual é o seu nome?"
}, {
  id: "q3",
  question: "Where are you from?",
  answer: "I AM FROM",
  translation: "De onde você é?"
}, {
  id: "q4",
  question: "Nice to meet you",
  answer: "LIKEWISE",
  translation: "Prazer em conhecer você"
}, {
  id: "q5",
  question: "How is it going?",
  answer: "GREAT",
  translation: "Como vai?"
}];
var MAX_WRONG_GUESSES = 6;
var COUNTDOWN_TIME = 5;
var CONFETTI_DURATION = 3000;

/***/ }),

/***/ "./src/hooks/useGameLogic.ts":
/*!***********************************!*\
  !*** ./src/hooks/useGameLogic.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGameLogic: function() { return /* binding */ useGameLogic; }
/* harmony export */ });
/* harmony import */ var _Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/questions */ "./src/constants/questions.ts");
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/messages */ "./src/utils/messages.ts");






var useGameLogic = function useGameLogic() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      currentQuestionIndex: 0,
      guessedLetters: new Set(),
      wrongGuesses: 0,
      showTranslation: false,
      correctCount: 0,
      gameStatus: 'playing',
      countdown: _constants_questions__WEBPACK_IMPORTED_MODULE_2__.COUNTDOWN_TIME,
      showConfetti: false
    }),
    _useState2 = (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    countdownTimer = _useState4[0],
    setCountdownTimer = _useState4[1];
  var startCountdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setState(function (prev) {
      return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
        countdown: _constants_questions__WEBPACK_IMPORTED_MODULE_2__.COUNTDOWN_TIME
      });
    });
    var timer = setInterval(function () {
      setState(function (prev) {
        var newCount = prev.countdown - 1;
        if (newCount <= 0) {
          clearInterval(timer);
          if (prev.gameStatus === 'finished') {
            restartGame();
          } else {
            nextQuestion();
          }
          return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
            countdown: _constants_questions__WEBPACK_IMPORTED_MODULE_2__.COUNTDOWN_TIME
          });
        }
        return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
          countdown: newCount
        });
      });
    }, 1000);
    setCountdownTimer(timer);
  }, []);
  var handleGuess = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (letter) {
    if (state.gameStatus !== "playing") return;
    var answer = _constants_questions__WEBPACK_IMPORTED_MODULE_2__.QUESTIONS[state.currentQuestionIndex].answer;
    var newGuessedLetters = new Set(state.guessedLetters);
    newGuessedLetters.add(letter);
    if (!answer.includes(letter)) {
      var newWrongGuesses = state.wrongGuesses + 1;
      var newGameStatus = newWrongGuesses >= _constants_questions__WEBPACK_IMPORTED_MODULE_2__.MAX_WRONG_GUESSES ? 'lost' : 'playing';
      setState(function (prev) {
        return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
          guessedLetters: newGuessedLetters,
          wrongGuesses: newWrongGuesses,
          gameStatus: newGameStatus
        });
      });
      if (newGameStatus === 'lost') {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: 'Não foi dessa vez...',
          icon: 'none',
          duration: 2000
        });
        startCountdown();
      }
    } else {
      var newMaskedWord = answer.split("").map(function (l) {
        return l === " " ? " " : newGuessedLetters.has(l) ? l : "_";
      }).join("");
      var won = !newMaskedWord.includes("_");
      setState(function (prev) {
        return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
          guessedLetters: newGuessedLetters,
          showTranslation: won,
          gameStatus: won ? 'won' : 'playing',
          correctCount: won ? prev.correctCount + 1 : prev.correctCount,
          showConfetti: won
        });
      });
      if (won) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: 'Muito bem!',
          icon: 'success',
          duration: 2000
        });
        setTimeout(function () {
          setState(function (prev) {
            return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
              showConfetti: false
            });
          });
        }, _constants_questions__WEBPACK_IMPORTED_MODULE_2__.CONFETTI_DURATION);
        setTimeout(function () {
          if (state.currentQuestionIndex === _constants_questions__WEBPACK_IMPORTED_MODULE_2__.QUESTIONS.length - 1) {
            setState(function (prev) {
              return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
                gameStatus: 'finished',
                showConfetti: true
              });
            });
            startCountdown();
          } else {
            nextQuestion();
          }
        }, _constants_questions__WEBPACK_IMPORTED_MODULE_2__.CONFETTI_DURATION);
      }
    }
  }, [state.currentQuestionIndex, state.guessedLetters, state.wrongGuesses, state.correctCount]);
  var nextQuestion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex >= _constants_questions__WEBPACK_IMPORTED_MODULE_2__.QUESTIONS.length) {
      setState(function (prev) {
        return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
          gameStatus: 'finished'
        });
      });
      return;
    }
    setState(function (prev) {
      return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, prev), {}, {
        currentQuestionIndex: nextIndex,
        guessedLetters: new Set(),
        wrongGuesses: 0,
        showTranslation: false,
        gameStatus: 'playing'
      });
    });
  }, [state.currentQuestionIndex]);
  var restartGame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      setCountdownTimer(null);
    }
    setState({
      currentQuestionIndex: 0,
      guessedLetters: new Set(),
      wrongGuesses: 0,
      showTranslation: false,
      correctCount: 0,
      gameStatus: 'playing',
      countdown: _constants_questions__WEBPACK_IMPORTED_MODULE_2__.COUNTDOWN_TIME,
      showConfetti: false
    });
  }, [countdownTimer]);
  var getMaskedWord = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var answer = _constants_questions__WEBPACK_IMPORTED_MODULE_2__.QUESTIONS[state.currentQuestionIndex].answer;
    return answer.split("").map(function (letter) {
      return letter === " " ? " " : state.guessedLetters.has(letter) ? letter : "_";
    }).join(" ");
  }, [state.currentQuestionIndex, state.guessedLetters]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (countdownTimer) {
        clearInterval(countdownTimer);
      }
    };
  }, [countdownTimer]);
  return {
    state: state,
    handleGuess: handleGuess,
    restartGame: restartGame,
    getMaskedWord: getMaskedWord,
    getFinalMessage: function getFinalMessage() {
      return (0,_utils_messages__WEBPACK_IMPORTED_MODULE_3__.getFinalMessage)(state.correctCount, _constants_questions__WEBPACK_IMPORTED_MODULE_2__.QUESTIONS.length);
    }
  };
};

/***/ }),

/***/ "./src/hooks/useKeyboard.ts":
/*!**********************************!*\
  !*** ./src/hooks/useKeyboard.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useKeyboard: function() { return /* binding */ useKeyboard; }
/* harmony export */ });
/* harmony import */ var _Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["window"];



var useKeyboard = function useKeyboard(onKeyPress) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      windowWidth: 0,
      windowHeight: 0,
      showKeyboard: true
    }),
    _useState2 = (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var key = event.key.toUpperCase();
    if (/^[A-Z]$/.test(key)) {
      onKeyPress(key);
    }
  }, [onKeyPress]);
  var updateWindowDimensions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setState(function (prev) {
      return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prev), {}, {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    });
  }, []);
  var toggleKeyboard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setState(function (prev) {
      return (0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_chain_Desktop_forca_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prev), {}, {
        showKeyboard: !prev.showKeyboard
      });
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (false) {}
  }, [handleKeyDown, updateWindowDimensions]);
  return {
    state: state,
    toggleKeyboard: toggleKeyboard
  };
};

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"MiniApp"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/utils/gameHelpers.ts":
/*!**********************************!*\
  !*** ./src/utils/gameHelpers.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateScore: function() { return /* binding */ calculateScore; },
/* harmony export */   formatTime: function() { return /* binding */ formatTime; }
/* harmony export */ });
/* unused harmony exports getMaskedWord, isValidLetter, hasWon */
var calculateScore = function calculateScore(correctCount, totalQuestions) {
  return Math.round(correctCount / totalQuestions * 100);
};
var getMaskedWord = function getMaskedWord(answer, guessedLetters) {
  return answer.split("").map(function (letter) {
    return letter === " " ? " " : guessedLetters.has(letter) ? letter : "_";
  }).join(" ");
};
var isValidLetter = function isValidLetter(key) {
  return /^[A-Z]$/.test(key);
};
var hasWon = function hasWon(maskedWord) {
  return !maskedWord.includes("_");
};
var formatTime = function formatTime(seconds) {
  return "".concat(seconds, " segundo").concat(seconds !== 1 ? 's' : '');
};

/***/ }),

/***/ "./src/utils/messages.ts":
/*!*******************************!*\
  !*** ./src/utils/messages.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFinalMessage: function() { return /* binding */ getFinalMessage; },
/* harmony export */   getGameMessages: function() { return /* binding */ getGameMessages; }
/* harmony export */ });
/* harmony import */ var _gameHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameHelpers */ "./src/utils/gameHelpers.ts");

var getFinalMessage = function getFinalMessage(correctCount, totalQuestions) {
  var percentage = (0,_gameHelpers__WEBPACK_IMPORTED_MODULE_0__.calculateScore)(correctCount, totalQuestions);
  if (percentage === 100) {
    return 'Incrível! Você acertou todas as questões!';
  } else if (percentage >= 80) {
    return 'Muito bem! Você teve um ótimo desempenho!';
  } else if (percentage >= 60) {
    return 'Bom trabalho! Continue praticando!';
  } else if (percentage >= 40) {
    return 'Você está no caminho certo! Tente novamente!';
  } else {
    return 'Não desista! A prática leva à perfeição!';
  }
};
var getGameMessages = {
  lost: 'Não foi dessa vez...',
  won: 'Muito bem!',
  nextQuestion: 'Próxima pergunta em',
  restart: 'Reiniciando em',
  finalScore: 'Pontuação final:',
  playAgain: 'Jogar Novamente',
  typeLetter: 'Digite aqui para jogar...'
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map
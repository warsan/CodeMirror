# CodeMirror

[![Build Status](https://travis-ci.org/codemirror/CodeMirror.svg)](https://travis-ci.org/codemirror/CodeMirror)
[![NPM version](https://img.shields.io/npm/v/codemirror.svg)](https://www.npmjs.org/package/codemirror)
[![Join the chat at https://gitter.im/codemirror/CodeMirror](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/codemirror/CodeMirror)  

CodeMirror - это универсальный текстовый редактор, реализованный в JavaScript для браузера.  
Он специализируется на редактировании кода и поставляется с более чем 100 языковыми режимами и различными дополнениями, 
реализующими более продвинутый функционал редактирования.  
Каждый язык поставляется с полнофункциональным кодом и подсветкой синтаксиса для помощи в чтении и редактировании сложного кода.

Богатый API программирования и система CSS-темизации доступны для настройки CodeMirror в соответствии с вашим приложением и расширения его функциональности.

Дополнительную информацию (и [руководство](https://codemirror.net/doc/manual.html)) можно найти на [проектной странице](https://codemirror.net).  
Для вопросов и обсуждения используйте [дискуссионный форум](https://discuss.codemirror.net/).

См. [CONTRIBUTING.md](https://github.com/codemirror/CodeMirror/blob/master/CONTRIBUTING.md) для ознакомления с руководящими принципами.

Сообщество CodeMirror стремится быть гостеприимным ко всем. 
Мы используем [Пакт участника (1.1)](http://contributor-covenant.org/version/1/1/0/) в качестве кодекса поведения.

### Установка

Либо получите [zip-файл](https://codemirror.net/codemirror.zip) с последней версией, либо убедитесь, что у вас установлен и запущен [Node](https://nodejs.org/):

    npm install codemirror

**NOTE**: Это исходный репозиторий для библиотеки, а не канал распространения.  
Клонирование не является рекомендуемым способом установки библиотеки, и фактически не будет работать, если вы не запустите этап сборки.

### Быстрый запуск

Для сборки проекта убедитесь, что у вас установлен Node.js (по крайней мере, версия 6), а затем `npm install`.    
Для запуска просто откройте `index.html` в вашем браузере (вам не нужно запускать веб-сервер). Проведите тесты с `npm test`.

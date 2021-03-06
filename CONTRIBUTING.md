# Как внести свой вклад

- [Получение справки](#получение-справки)
- [Отправка отчетов об ошибках](#отправка-отчетов-об-ошибках)
- [Вклад в код](#вклад-в-код)

## Получение справки

Обсуждение в сообществе, вопросы и неформальное сообщение об ошибках проводится на [форуме discussion.CodeMirror](http://discuss.codemirror.net).

## Отправка отчетов об ошибках

Предпочтительный способ сообщать об ошибках - использовать [GitHub issue tracker](http://github.com/codemirror/CodeMirror/issues). 
Прежде чем сообщить об ошибке, прочтите эти указатели.

**Note:** Трекер проблем предназначен для *багов*, а не для запросов помощи. 
Вопросы следует задавать на [форуме discussion.CodeMirror](http://discuss.codemirror.net).

### Эффективное информирование об ошибках

- CodeMirror поддерживается добровольцами. Они тебе ничего не должны, так что будь вежлив. 
  Сообщения с возмущенным или воинственным тоном, как правило, перемещаются на дно стопки.

- Включите информацию о **браузере, в котором возникла проблема**. 
  Даже если вы протестировали несколько браузеров, и проблема возникла во всех из них, упомяните об этом факте в отчете об ошибке. 
  Также укажите номера версий браузера и операционной системы, в которой вы работаете.

- Упомяните, какой выпуск CodeMirror вы используете. 
  Предпочтительно также попробовать с текущим снимком развития, чтобы убедиться, что проблема еще не исправлена.

- Упомяните очень точно, что пошло не так. "Х сломан" - не очень хороший отчет об ошибках. 
  А чего ты ожидал? Что случилось вместо этого? 
  Опишите точные шаги, которые должен предпринять сопровождающий, чтобы проблема возникла. 
  Мы не можем исправить то, что не можем наблюдать.

- Если проблема не может быть воспроизведена ни в одной из демо-версий, включенных в дистрибутив CodeMirror, пожалуйста, предоставьте HTML-документ, демонстрирующий проблему. 
  Лучший способ сделать это - зайти на [jsbin.com](http://jsbin.com/ihunin/edit), войти туда, нажать кнопку сохранить и включить полученную ссылку в сообщение об ошибке.

## Вклад в код

Обратите внимание, что мы не принимаем никаких новых дополнений или режимов в основной дистрибутив. 
Если вы написали такой модуль, пожалуйста, распространяйте его как отдельный пакет NPM.

- Убедитесь, что у вас есть [Учетная запись GitHub](https://github.com/signup/free).
- Fork [CodeMirror](https://github.com/codemirror/CodeMirror/) ([как форк репо](https://help.github.com/articles/fork-a-repo))
- Делайте ваши изменения
- Если ваши изменения легко тестируются или могут регрессировать, добавьте тесты.
  Тесты для ядра идут в `test/test.js`, некоторые режимы имеют свой собственный набор тестов под `mode/XXX/test.js`. 
  Не стесняйтесь добавлять новые наборы тестов в режимах, где их еще нет (не забудьте связать новые тесты в `test/index.html`).
- Следуйте общему стилю кода остальной части проекта (см. ниже). 
  Выполните 'bin/lint', чтобы убедиться, что linter счастлив.
- Убедитесь, что все тесты пройдены. Посетите `test/index.html` в вашем браузере, чтобы запустить их.
- Отправьте pull request ([как создать pull request](https://help.github.com/articles/fork-a-repo)).
  Не помещайте более одной функции/фикса в один pull request.

Внося код в CodeMirror, вы

 - согласиться на лицензию внесенного кода в соответствии с CodeMirror's [MIT license](https://codemirror.net/LICENSE).
 - подтвердить, что вы имеете право вносить свой вклад и лицензировать соответствующий код.
   (Либо вы обладаете всеми правами на код, либо правообладатель явным образом предоставил право использовать его таким образом, 
   посредством совместимой лицензии с открытым исходным кодом или по прямому соглашению с вами).

### Стандарты кодирования

- 2 пробела на уровень отступов, без табуляции.

- Обратите внимание, что подложка (`bin/lint`), которая запускается после каждого коммита, жалуется на неиспользуемые переменные и функции. 
  Прикрепите их имена подчеркиванием, чтобы заглушить их.

- CodeMirror *не* следует предписанному стилю JSHint или JSLint.
  Патчи, которые пытаются 'исправить' код для передачи одного из этих зануд, будут бесцеремонно отброшены.

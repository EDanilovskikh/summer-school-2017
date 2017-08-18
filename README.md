# summer-school-2017-testing

## Gemini. Подготовка
```
npm install -g gemini
npm install -g selenium-standalone
selenium-standalone install
npm install -g gemini-gui
```

## Gemini. Запуск тестов

```
selenium-standalone start
gemini test [paths to test suites]
gemini-gui --config [gemini-сonfig] [file test]
```

## Gemini. Обновление скриншотов 

```
gemini update [paths to test suites]
```

## Mockserver.Установка

```
npm install -g mockserver
npm install mockserver
```

## Mockserver.Запуск

```
mockserver -p 8080 -m test/mocks
```

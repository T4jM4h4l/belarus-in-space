# Инструкция по размещению проекта на GitHub

## 1. Инициализация Git репозитория

Откройте терминал в папке проекта (`app`) и выполните:

```bash
# Инициализация репозитория
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Беларусь в космосе"
```

## 2. Создание репозитория на GitHub

1. Зайдите на https://github.com
2. Нажмите **New repository** (или **New** → **Repository**)
3. Заполните:
   - **Repository name**: `belarus-in-space` (или другое название)
   - **Description**: `Медиа-инсталляция о вкладе Беларуси в освоение космоса`
   - Выберите **Public** или **Private**
   - **НЕ** ставьте галочку "Initialize this repository with a README"
4. Нажмите **Create repository**

## 3. Привязка локального репозитория к GitHub

После создания репозитория GitHub покажет команды для привязки. Выполните:

```bash
# Замените YOUR_USERNAME на ваш ник на GitHub
git remote add origin https://github.com/YOUR_USERNAME/belarus-in-space.git

# Переименование ветки в main
git branch -M main

# Отправка на GitHub
git push -u origin main
```

## 4. Настройка GitHub Pages (для деплоя)

### Вариант A: Автоматический деплой через GitHub Actions (рекомендуется)

Workflow уже настроен в `.github/workflows/deploy.yml`. После пуша в ветку `main`:

1. Перейдите в **Settings** → **Pages**
2. В разделе **Build and deployment**:
   - **Source**: GitHub Actions
3. GitHub автоматически соберёт и задеплоит ваш сайт

После деплоя сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/belarus-in-space/
```

### Вариант B: Ручной деплой на GitHub Pages

Если не хотите использовать Actions:

1. Соберите проект:
   ```bash
   npm run build
   ```

2. В папке `dist` находится готовая версия сайта

3. Создайте ветку `gh-pages`:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

4. В **Settings** → **Pages** выберите:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`

## 5. Проверка

После деплоя откройте URL вашего сайта и убедитесь, что:
- ✅ Сайт загружается
- ✅ Все секции работают
- ✅ Аудио воспроизводится
- ✅ Презентация открывается
- ✅ Навигация работает корректно

## 6. Обновление проекта

После внесения изменений:

```bash
# Проверка изменений
git status

# Добавление файлов
git add .

# Коммит
git commit -m "Описание изменений"

# Отправка на GitHub
git push
```

GitHub Actions автоматически соберёт и задеплоит обновлённую версию.

## Примечания

- Убедитесь, что все аудиофайлы находятся в `public/` и правильно названы
- Файлы `node_modules/` и `dist/` исключены через `.gitignore`
- Для изменения настроек деплоя редактируйте `.github/workflows/deploy.yml`

## Ссылки

- [Документация GitHub Pages](https://docs.github.com/en/pages)
- [Документация GitHub Actions](https://docs.github.com/en/actions)
- [Документация Vite](https://vitejs.dev/)

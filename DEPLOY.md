# 🚀 Инструкция по публикации на GitHub Pages

## Шаг 1: Создание репозитория на GitHub

1. Перейдите на [GitHub.com](https://github.com)
2. Нажмите кнопку **"New repository"**
3. Заполните поля:
   - **Repository name**: `apple-tech-dream`
   - **Description**: `AI-агенты для бизнеса - Интерактивная презентация`
   - Выберите **Public**
   - НЕ добавляйте README, .gitignore или лицензию (мы уже создали их)

## Шаг 2: Загрузка файлов в репозиторий

### Вариант A: Через GitHub Web Interface

1. Нажмите **"uploading an existing file"**
2. Перетащите все файлы проекта:
   - `index.html`
   - `README.md`
   - `package.json`
   - `.gitignore`
   - `.github/workflows/deploy.yml`
3. Напишите commit message: `Initial commit: AI business presentation`
4. Нажмите **"Commit changes"**

### Вариант B: Через Git командную строку

```bash
# Инициализация Git репозитория
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: AI business presentation"

# Подключение к GitHub репозиторию
git remote add origin https://github.com/YOUR-USERNAME/apple-tech-dream.git

# Загрузка на GitHub
git push -u origin main
```

## Шаг 3: Настройка GitHub Pages

1. Перейдите в **Settings** вашего репозитория
2. Прокрутите до секции **"Pages"** в левом меню
3. В разделе **"Source"** выберите:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
4. Нажмите **"Save"**

## Шаг 4: Настройка GitHub Actions

1. GitHub автоматически создаст workflow файл
2. Перейдите в **Actions** вкладку
3. Дождитесь завершения первого деплоя
4. Проверьте статус в **Actions** → **Deploy to GitHub Pages**

## Шаг 5: Проверка публикации

1. Дождитесь завершения деплоя (обычно 2-5 минут)
2. Перейдите по ссылке: `https://YOUR-USERNAME.github.io/apple-tech-dream`
3. Убедитесь, что презентация загружается корректно

## 🔧 Настройка кастомного домена (опционально)

1. В **Settings** → **Pages**
2. Введите ваш домен в поле **"Custom domain"**
3. Добавьте CNAME файл в корень репозитория:
   ```
   your-domain.com
   ```

## 📱 Тестирование

### Локальное тестирование

```bash
# Установка зависимостей (опционально)
npm install

# Запуск локального сервера
npm run start
# или
python -m http.server 8000
```

### Тестирование на разных устройствах

- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: iOS Safari, Android Chrome
- **Tablet**: iPad Safari, Android Chrome

## 🚨 Решение проблем

### Проблема: Сайт не загружается

- Проверьте, что все файлы загружены в репозиторий
- Убедитесь, что `index.html` находится в корне
- Проверьте статус деплоя в Actions

### Проблема: Эффекты не работают

- Убедитесь, что браузер поддерживает CSS backdrop-filter
- Проверьте консоль браузера на ошибки
- Попробуйте обновить страницу (Ctrl+F5)

### Проблема: QR-коды не генерируются

- Проверьте подключение к интернету
- Убедитесь, что CDN qrcodejs доступен
- Проверьте консоль браузера

## 📊 Мониторинг

### GitHub Pages Analytics

1. Перейдите в **Settings** → **Pages**
2. Включите **"GitHub Pages analytics"**
3. Просматривайте статистику в **Insights** → **Traffic**

### Проверка производительности

- Используйте Google PageSpeed Insights
- Проверьте Lighthouse в Chrome DevTools
- Оптимизируйте изображения при необходимости

## 🔄 Обновление презентации

1. Внесите изменения в файлы
2. Загрузите изменения в репозиторий:
   ```bash
   git add .
   git commit -m "Update presentation content"
   git push
   ```
3. GitHub Actions автоматически обновит сайт

## 📞 Поддержка

При возникновении проблем:

1. Проверьте [GitHub Pages документацию](https://docs.github.com/en/pages)
2. Создайте Issue в репозитории
3. Обратитесь к команде разработки

---

**Успешного деплоя! 🚀**

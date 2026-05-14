# Стратегия Images 2.0 для HOMM2 / Fairy Quest

Дата: 2026-05-14

## Контекст

Мемо продолжает глубокий дизайн-проход и свежую работу с menu-shell:

- `homm2-design-system-sandbox/docs/deep-design-pass-2026-05-14.md`
- `homm2-design-system-sandbox/css/components.css`
- `homm2-design-system-sandbox/css/fairy-journeys.css`
- `homm2-design-system-sandbox/fairy-journeys.html`
- `YourInsideQuest/css/fairy-journeys.css`
- `YourInsideQuest/fairy-journeys.html`

Текущее состояние важно: в sandbox уже появились общие примитивы `.menu-screen-shell`, `.menu-frame-shell`, `.menu-center-mount`, `.menu-plate-shell`, `.command-slab`, `.menu-side-rail`, `.menu-save-slot`, `.menu-route-index`. В applied-версии YourInsideQuest всё ещё живёт более богатый объектный экран: тяжёлые боковые колонны, балки, резные углы, центральная вмонтированная плита меню, компактный title cartouche и supporting lore strip.

Внешний lazyweb-проход смотрел на fantasy game UI asset packs, категории HoMM2-спрайтов, подход fheroes2 к модернизации без потери исходной грамматики, fantasy strategy framing в духе Songs of Conquest, CSS `border-image` / nine-slice и типовые риски AI-generated game assets.

## Лучший следующий шаг

**Не начинать с генерации готовых иллюстраций. Лучший следующий шаг - ввести слой asset-slot contract и сделать один контролируемый image-assisted pilot.**

Практически это значит: в дизайн-системе нужно описать **Art Asset Layer** - где растровые ассеты разрешены, как они режутся/тайлятся/собираются в спрайты, какой компонент владеет слотом, какой есть CSS fallback, какие размеры и responsive-проверки обязательны.

Первый пилот: **углы рамки + edge tile + 2-3 route badge sprites**. Это маленький, системный и проверяемый набор. Он напрямую поддерживает уже существующую menu-shell грамматику и не ломает layout.

Широкий Images 2.0-проход сейчас был бы преждевременным: текущие главные задачи всё ещё системные - анатомия shell, иерархия, responsive, состояния, язык и route dramaturgy. Изображения должны усиливать reusable material vocabulary, а не закрывать слабые компонентные контракты.

## Правило применения Images 2.0

Использовать Images 2.0 только когда ассет является **ограниченным визуальным объектом** со стабильным размером, понятным местом в компоненте и fallback.

Подходит, если:

- ассет можно предсказуемо обрезать, тайлить, nine-slice-ить, маскировать или собрать в sprite sheet;
- компонент уже работает без изображения;
- изображение добавляет материальную память: резной угол, герб, печать, маршрутный маркер, chapter vignette;
- внутри изображения нет читаемого текста;
- ассет можно проверить на desktop/tablet/mobile;
- генерация идёт семейством, а не одиночными украшениями.

Не использовать, если проблема в:

- layout hierarchy;
- ясности button states;
- типографике и плотности текста;
- responsive compression;
- локализации;
- focus/hover/disabled/selected behavior;
- token/component architecture;
- маленьких семантических иконках, которые должны быть идеально читаемы на 16-24 px.

Коротко: **CSS владеет структурой, состояниями, адаптивностью и текстом. Images 2.0 владеет только авторской материей и атмосферой после того, как структура уже правильная.**

## Матрица приоритетов

| Класс ассета | Решение | Почему |
| --- | --- | --- |
| Page layout, сетка menu shell, rails, command stack, save slot, route index | Только CSS/system | Это поведенческие контракты. Изображения усложнят responsive и спрячут слабую иерархию. |
| Plaque typography, active/locked/current/completed states, hover/focus/disabled | Только CSS/system | Состояния должны быть инспектируемыми, themeable, доступными и локализуемыми. |
| Gold bevels, простые inset-линии, тени, separators, ambient glow | Только CSS/system | Текущие tokens/components уже хорошо это держат. Дешево, резко, консистентно. |
| Обычные decorative panels | Только CSS/system по умолчанию | Панель - компонент, не арт. Изображение допустимо только для named frame family. |
| Parchment texture | Image-assisted, но system-driven | Тонкий тайл поможет reading surface, но должен принадлежать `.parchment-object` и иметь низкий контраст. |
| Dark wood / frame texture | Image-assisted, но system-driven | Полезно для beams/columns, но CSS должен держать контраст, состояния и размеры. |
| Frame corners + edge pieces | Image-assisted, но system-driven | Лучший первый кандидат. Углы должны быть crisp, края - repeat/round/nine-slice. |
| Heraldic crests / faction seals | Image-assisted, но system-driven | Хороши как bounded marks. Нужны маленькие семейства, без текста внутри. |
| Route badges / wax seals / chapter markers | Image-assisted, но system-driven | Усиливают game-board progression, если CSS владеет state rings и labels. |
| Micro-ornaments / divider flourishes | Image-assisted, но system-driven | Только как редкие mask/sprite pieces. Нельзя рассыпать уникальные завитки по секциям. |
| Object icons: compass, scroll, key, lantern, seal, archive tab | Обычно image-assisted, иногда CSS/SVG | Генерация полезна для style exploration, но итог нужно нормализовать в маленький sprite/mask set. |
| Map tiles / route-board terrain snippets | Image-assisted или image-first по роли | Если это повторяемая подложка - system-driven. Если chapter scene/map fragment - image-first. |
| Chapter illustrations / scene vignettes | Image-first | Это нарративный арт, не структура компонента. Генерировать после стабилизации route board. |
| Full hero/background artwork | Image-first, но позже | Высокий риск visual drift, веса страницы и потери управляемости. Не следующий шаг. |

## Рекомендации для HOMM2 / Fairy

### Спрайты

Сначала нужна маленькая таксономия, потом генерация:

- **route objects:** компас, milestone, locked gate, open gate, map pin;
- **archive objects:** scroll, book clasp, wax seal, tab, lens;
- **choice objects:** key, lantern, mirror, crownless crest, threshold stone;
- **status objects:** spark, moon, leaf, thread, small shield.

Формат: один sprite sheet или небольшая папка transparent PNG/WebP в 1x/2x, фиксированные слоты 24, 32, 40, 64 px. CSS всё равно владеет color rings, disabled/active/current states, focus, tooltip и layout.

HoMM2 здесь важен не как источник для копирования спрайтов. Урок другой: ресурсы и артефакты читаются быстрее текста, потому что это маленькие физические объекты. Значит системе нужны object families, а не заимствованные nostalgia pixels.

### Тайлы

Тайлы использовать только там, где повторение естественно:

- parchment grain для reading panels;
- dark wood grain для frame beams / side columns;
- low-contrast route-board backing;
- subtle stone/ruin pattern для secondary rails.

Тайл обязан быть seamless, низкоконтрастным и проверенным на разных размерах контейнера. Видимый AI-шов или повторяющаяся клякса сразу удешевит весь экран.

### Паттерны

Паттерны должны жить за системой:

- opacity токенизировать;
- scale фиксировать по material role;
- каждый pattern должен иметь CSS fallback;
- не класть активный pattern под плотный русский текст без проверки контраста.

Лучший первый pattern: **dark carved wood / brass edge tile** для menu frame beams. Худший первый pattern: **full-screen parchment wallpaper**.

### Углы рамок

Frame corners - самый сильный Images 2.0 pilot, потому что в системе уже есть `.frame-corner`, `.menu-frame-shell`, `.menu-screen-shell`.

Пилот должен дать:

- четыре transparent corner pieces;
- один horizontal edge tile;
- один vertical edge tile;
- CSS-only fallback на текущих borders/gradients;
- один `border-image` / nine-slice вариант для проверки.

Технический принцип из web/game UI references ровно совпадает с задачей: углы не должны растягиваться, края должны повторяться или масштабироваться. Это идеальная зона для Images 2.0, потому что арт тут обслуживает компонент, а не командует им.

## Выводы из внешних референсов

- Fantasy UI asset packs почти всегда разделяют panels, borders, icons, parchment и modular tiles. Это подтверждает нужность asset taxonomy, а не одной большой генерации.
- HoMM2 держится на object grammar и screen grammar: ресурсы, артефакты, кнопки, town-screen как место. Копировать ассеты нельзя; полезно перенять семейства объектов и физичность UI.
- fheroes2-подход важен как ограничение: улучшать resolution, readability, interaction и scaling, не ломая исходную грамматику. Для веб-системы это значит responsive components first, richer art second.
- Songs of Conquest-подобная fantasy strategy подача держится на action loops: explore, build, claim, manage resources. Для Fairy Quest route badges должны объяснять progression, а не просто украшать.
- CSS `border-image` / nine-slice - правильный мост между generated frame art и responsive web: фиксированные углы, масштабируемые/повторяемые края, обычный CSS fallback.
- AI-generated textures опасны на больших поверхностях: style drift, шум, мягкость, fake seams, разные уровни детализации. Для UI нужен более строгий cleanup, чем для mood art.

## Практический rollout

### Сейчас

1. Добавить в reference docs или `assets/README.md` слой **Art Asset Layer**:
   - роль ассета;
   - owning component;
   - допустимые форматы;
   - размеры;
   - fallback;
   - responsive test;
   - localization rule: никакого generated readable text.

2. Зафиксировать asset slots до генерации:
   - `menu-frame-corner`;
   - `menu-frame-edge-x`;
   - `menu-frame-edge-y`;
   - `parchment-texture-tile`;
   - `route-badge-sprite`;
   - `object-icon-sprite`;
   - `chapter-vignette`.

3. Провести один Images 2.0 pilot:
   - frame corner / edge set;
   - 2-3 route badge variants;
   - без текста;
   - transparent или нейтральный фон;
   - проверить в `fairy-journeys.html` без изменения layout.

Статус пилотов:

- Frame corner / edge set: integrated as an optional `.menu-art-layer` on the menu shell.
- Route badge sprite: integrated through `.route-badge` as an optional art layer for the Fairy route index, with CSS fallback owning sizing, rings and states.

4. Обновить `reference.html`: показывать image-assisted components рядом с CSS-only fallback.

### Позже

- Сгенерировать compact object-icon sheet после стабилизации командных labels и route states.
- Сгенерировать parchment/wood texture tiles после фиксации opacity, contrast и fallback tokens.
- Сгенерировать chapter illustrations после появления route-board component со states current/locked/completed.
- Исследовать faction/crest variants после стабилизации product language.

### Пока избегать

- Full-screen generated hero art.
- Большие AI parchment backgrounds.
- Текст, запечённый в images.
- Уникальные AI ornaments для каждой секции.
- Декоративные изображения без component slot.
- Generated icons напрямую на 16-24 px без нормализации.
- Копирование HoMM2 sprites, artifacts, town screens или UI assets.

## Риски и контроль

### Visual Drift

Риск: каждый сгенерированный ассет имеет чуть другой hand, palette, bevel logic или детализацию.

Контроль: генерировать семействами, не одиночками. Ревьюить sheets. Держать палитру: dark wood, aged brass, parchment, muted moss, rare mana blue.

### Generic AI Texture Noise

Риск: правдоподобная fantasy texture становится кашей, шумом или узнаваемым AI-узором.

Контроль: низкий контраст, жёсткий crop, аккуратный downsample/sharpen, отклонять fake inscriptions, malformed ornament и seams.

### Resolution / Responsiveness

Риск: нарисованная рамка хороша в одном размере и ломается на mobile/high-DPI.

Контроль: fixed sprite slots, 2x exports, nine-slice frames, `image-set()` где полезно, screenshot checks на 1440, 1180, 920, 768, 390, 360 px.

### Localization Friction

Риск: ассеты содержат псевдотекст или заставляют русские labels подчиняться картинке.

Контроль: никогда не генерировать читаемый текст. Русский copy остаётся в HTML. Изображения могут обрамлять labels, но не содержать labels.

### Performance

Риск: декоративный арт увеличит вес страницы и задержит первый экран.

Контроль: начать с одного маленького sprite sheet и 1-2 tiles. WebP/PNG по роли, preload только first-screen critical, chapter illustrations lazy-load, CSS fallback всегда usable.

## Точные briefs для будущей генерации

1. **Menu frame corner and edge kit**  
   Transparent PNG asset sheet for a heraldic fantasy web UI frame: four carved dark-wood corners with aged brass inlay, one horizontal edge tile, one vertical edge tile, no text, no symbols from existing games, readable at 48-96 px, restrained contrast, frontal orthographic UI asset, clean alpha.

2. **Route badge sprite sheet**  
   Six small fantasy route badges for a fairy-tale chapter map: open gate, locked gate, compass, milestone stone, wax seal, lantern marker. Transparent background, 64 px source size, strong silhouette at 32 px, warm brass/parchment/moss palette, no text.

3. **Parchment texture tile**  
   Seamless square parchment texture tile for readable UI panels, subtle fiber and age variation, no stains near center, no letters, no heavy borders, low contrast, designed to sit behind black/brown Russian text, 512 px tile.

4. **Dark carved wood tile**  
   Seamless dark wood UI texture tile for frame beams and side columns, vertical and horizontal grain variants, very low contrast, faint carved grooves, no knots that dominate, no text, warm brown/ink palette, 512 px tile.

5. **Object icon direction sheet**  
   Compact fantasy object icons for a self-discovery quest menu: compass, scroll, key, seal, lantern, crest, route stone, archive tab. Transparent background, consistent lighting, 32 px readable silhouettes, not pixel art, not copied from HoMM2, no labels.

6. **Chapter vignette test**  
   Small chapter illustration for a route-board card: moonlit forest gate, parchment-map mood, dark wood/brass UI compatibility, no characters in foreground, no text, 4:3 crop-safe composition, clear quiet center for overlay-free use.

## Итоговая рекомендация

Images 2.0 должен войти в систему как **asset infrastructure**, а не как декоративный разгон. Лучший следующий design-system шаг - определить image slots и провести маленький frame-corner / route-badge pilot, который докажет, что generated art умеет подчиняться компонентной системе.

Если пилот проходит responsive screenshots и fallback checks, расширяться в icon sheet и subtle material tiles. Если нет - держать HOMM2/Fairy CSS-first до более сильного component contract.

# 📸 Instrucciones para agregar fotos a la línea de tiempo

## Cómo agregar tus fotos

1. **Coloca tus fotos en esta carpeta** (`public/timeline/`)
   - Puedes agregar **múltiples fotos por año**
   - Nombra las fotos según el año y un número: `2019-1.jpg`, `2019-2.jpg`, `2019-3.jpg`, etc.
   - Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`

2. **Nombres de archivo esperados:**
   - `2019-1.jpg`, `2019-2.jpg`, `2019-3.jpg` (puedes agregar más: `2019-4.jpg`, etc.)
   - `2020-1.jpg`, `2020-2.jpg`, `2020-3.jpg`
   - `2021-1.jpg`, `2021-2.jpg`, `2021-3.jpg`
   - `2022-1.jpg`, `2022-2.jpg`, `2022-3.jpg`
   - `2023-1.jpg`, `2023-2.jpg`, `2023-3.jpg`
   - `2024-1.jpg`, `2024-2.jpg`, `2024-3.jpg`
   - `2025-1.jpg`, `2025-2.jpg` (o más)

3. **Para agregar más fotos a un año:**
   - Agrega el archivo con el siguiente número (ej: `2019-4.jpg`)
   - Edita el archivo `src/data/timeline.ts`
   - Agrega la ruta en el array `images` del año correspondiente:
     ```typescript
     images: [
       '/timeline/2019-1.jpg',
       '/timeline/2019-2.jpg',
       '/timeline/2019-3.jpg',
       '/timeline/2019-4.jpg', // Nueva foto
     ]
     ```

4. **Si quieres usar nombres diferentes:**
   - Edita el archivo `src/data/timeline.ts`
   - Cambia las rutas en el array `images` de cada evento

## Ejemplo de estructura:

```
public/
  timeline/
    2019-1.jpg
    2019-2.jpg
    2019-3.jpg
    2020-1.jpg
    2020-2.jpg
    2020-3.jpg
    2021-1.jpg
    2021-2.jpg
    2021-3.jpg
    ... (y así para cada año)
```

## Características

- **Galería de fotos**: Cada año muestra una foto principal y miniaturas de las demás
- **Vista ampliada**: Haz clic en cualquier foto para verla en tamaño completo
- **Navegación**: En la vista ampliada, usa las flechas o las miniaturas para cambiar de foto
- **Placeholder automático**: Si una foto no se encuentra, se mostrará un placeholder automáticamente

## Nota

Las fotos se cargan desde la carpeta `public`, así que las rutas en el código deben empezar con `/timeline/`.


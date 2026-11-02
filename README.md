# manojfam.github.io

My personal website: about me, my projects and my blog.
Plain HTML and CSS, no build step, hosted free on GitHub Pages.

## Files

```
index.html        Home: intro, featured projects, latest post, contact
about.html        My story, experience, skills, education
projects.html     Every project in detail
blog/index.html   List of blog posts
blog/*.html       One file per post
404.html          Shown for any missing page
assets/style.css  All styles (light and dark follow the visitor's setting)
assets/main.js    "Copy email" button and footer year
.nojekyll         Tells GitHub Pages to serve the files as they are
```

## Preview on my PC

Double-click `index.html`, or run a small local server from this folder:

```cmd
python -m http.server 8000
```

then open http://localhost:8000.

## Put it online (first time)

1. On GitHub, create a new **public** repo named exactly `ManojFam.github.io`.
   (A repo with that name becomes the site at https://manojfam.github.io.)
2. From this folder:

   ```cmd
   git init -b main
   git add .
   git commit -m "First version of my website"
   git remote add origin https://github.com/ManojFam/ManojFam.github.io.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`. The site goes live in a minute or two.

After that, every `git push` updates the site.

## Write a new blog post

1. Copy `blog/why-i-replaced-our-attendance-spreadsheet.html` to a new file,
   e.g. `blog/my-new-post.html`, and change the title, date and text.
2. In `blog/index.html`, copy one `<li>` block to the top of the list and point it at the new file.
3. Optional: update "Latest notes" on `index.html`.
4. Commit and push.

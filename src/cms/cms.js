import CMS, { init } from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import FileSystemBackend from 'netlify-cms-backend-fs';

CMS.init = init;
CMS.registerBackend('file-system', FileSystemBackend);
const config = {};
if (process.env.NODE_ENV === 'development') {
  
  config.load_config_file = false;

  config.backend = {
    "name": "file-system",
    "api_root": "/api"
  };
  config.display_url = "http://localhost:8000";
  config.media_folder = "static/assets";
  config.public_folder = "public";
  config.collections = [
    {
      "name": "blog",
      "label": "Blog",
      "folder": "src/pages/blog",
      "create": true,
      "slug": "{{year}}-{{month}}-{{day}}-{{slug}}",
      "fields": [
        {
          "label": "Template Key",
          "name": "templateKey",
          "widget": "hidden",
          "default": "blog-post"
        },
        {
          "label": "Title",
          "name": "title",
          "widget": "string"
        },
        {
          "label": "Publish Date",
          "name": "date",
          "widget": "datetime"
        },
        {
          "label": "Description",
          "name": "description",
          "widget": "text"
        },
        {
          "label": "Body",
          "name": "body",
          "widget": "markdown"
        },
        {
          "label": "Tags",
          "name": "tags",
          "widget": "list"
        },
      ]
    },
    {
      "name": "pages",
      "label": "Pages",
      "files": [
        {
          "file": "src/pages/about/index.md",
          "label": "About",
          "name": "about",
          "fields": [
            {
              "label": "Template Key",
              "name": "templateKey",
              "widget": "hidden",
              "default": "about-page"
            },
            {
              "label": "Title",
              "name": "title",
              "widget": "string"
            },
            {
              "label": "Body",
              "name": "body",
              "widget": "markdown"
            },
          ]
        },
        {
          "file": "src/pages/products/index.md",
          "label": "Products Page",
          "name": "products",
          "fields": [
            {
              "label": "Template Key",
              "name": "templateKey",
              "widget": "hidden",
              "default":
                "product-page"
            },
            {
              "label": "Title",
              "name": "title",
              "widget": "string"
            },
            {
              "label": "Image",
              "name": "image",
              "widget": "image"
            },
            {
              "label": "Heading",
              "name": "heading",
              "widget": "string"
            },
            {
              "label": "Description",
              "name": "description",
              "widget": "string"
            },
            {
              "label": "Intro",
              "name": "intro",
              "widget": "object",
              "fields": [
                {
                  "label": "Heading",
                  "name": "heading",
                  "widget": "string"
                },
                {
                  "label": "Description",
                  "name": "description",
                  "widget": "text"
                },
                {
                  "label": "Blurbs",
                  "name": "blurbs",
                  "widget": "list",
                  "fields": [
                    {
                      "label": "Image",
                      "name": "image",
                      "widget": "image"
                    },
                    {
                      "label": "Text",
                      "name": "text",
                      "widget": "text"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Main",
              "name": "main",
              "widget": "object",
              "fields": [
                {
                  "label": "Heading",
                  "name": "heading",
                  "widget": "string"
                },
                {
                  "label": "Description",
                  "name": "description",
                  "widget": "text"
                },
                {
                  "label": "Image1",
                  "name": "image1",
                  "widget": "object",
                  "fields": [
                    {
                      "label": "Image",
                      "name": "image",
                      "widget": "image"
                    },
                    {
                      "label": "Alt",
                      "name": "alt",
                      "widget": "string"
                    }
                  ]
                },
                {
                  "label": "Image2",
                  "name": "image2",
                  "widget": "object",
                  "fields": [
                    {
                      "label": "Image",
                      "name": "image",
                      "widget": "image"
                    },
                    {
                      "label": "Alt",
                      "name": "alt",
                      "widget": "string"
                    }
                  ]
                },
                {
                  "label": "Image3",
                  "name": "image3",
                  "widget": "object",
                  "fields":
                    [
                      {
                        "label": "Image",
                        "name": "image",
                        "widget": "image"
                      },
                      {
                        "label": "Alt",
                        "name": "alt",
                        "widget": "string"
                      }
                    ]
                }
              ]
            },
            { "label": "Testimonials", "name": "testimonials", "widget": "list", fields: [{ "label": "Quote", "name": "quote", "widget": "string" }, { "label": "Author", "name": "author", "widget": "string" }] },
            { "label": "Full_image", "name": "full_image", "widget": "image" },
            {
              "label": "Pricing", "name": "pricing", "widget": "object", "fields": [{ "label": "Heading", "name": "heading", "widget": "string" },
              { "label": "Description", "name": "description", "widget": "string" }, { "label": "Plans", "name": "plans", "widget": "list", fields: [{ "label": "Plan", "name": "plan", "widget": "string" }, { "label": "Price", "name": "price", "widget": "string" }, { "label": "Description", "name": "description", "widget": "string" }, { "label": "Items", "name": "items", "widget": "list" }] }]
            },
          ],
        },
      ]
    }
  ];
} else {
  config.backend = {
    "name": "git-gateway",
    "branch": "master"
  }
}

CMS.init({ config });

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

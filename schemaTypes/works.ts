import { defineField } from "sanity";
import { FaBriefcase } from "react-icons/fa";

const works = {
    name: 'works',
    title: 'Works',
    type: 'document',
    icon: FaBriefcase,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}]
        },
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'Brief summary of work description, will be used for listing and meta descriptions. 500 characters max.',
            validation: (rule) => rule.max(500),
            rows: 4
        }),
        {
          name: "thumbnail",
          title: "Work Thumbnail",
          type: "image",
          description: "Upload work thumbnail, will be used in listings",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
        {
          name: "featuredImage",
          title: "Featured Image",
          type: "image",
          description: "Upload a work featured webpage",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
        {
            name: 'siteUrl',
            title: 'Site URL',
            type: 'url'
        },
        {
            name: 'codeUrl',
            title: 'Code URL',
            type: 'url'
        }
    ]
}

export default works
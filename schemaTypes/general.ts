import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const general = {
    name: "general",
    title: "General Info",
    type: "document",
    icon: BiUser,
    fields: [
        defineField({
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: (rule) => rule.required()
        }),
        {
            name: "aboutMe",
            title: "About me",
            type: "array",
            of: [{type: "block"}],
        },
        {
            name: "emailAddress",
            title: "Email Address",
            type: "string"
        },
        {
            name: "location",
            title: "Location",
            type: "string"
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: "object",
            description: "Add your social media links",
            fields: [
                {
                    name: "github",
                    title: "Github URL",
                    type: "url"
                },
                {
                    name: "linkedin",
                    title: "Linkedin URL",
                    type: "url"
                },
                {
                    name: "instagram",
                    title: "Instagram URL",
                    type: "url"
                },
                {
                    name: "facebook",
                    title: "Facebook URL",
                    type: "url"
                }
            ],
            options: {
              collapsed: false,
              collapsible: true,
              columns: 2,
            },
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{
                type: 'object',
                name: 'skill',
                fields: [
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'string'
                    },
                    defineField({
                        name: 'description',
                        title: 'Short Description',
                        description: 'Optional, max characters 500',
                        type: 'text',
                        rows: 4,
                        validation: (rule) => rule.max(500)
                    })
                ]
            }]
        }
    ],
}

export default general
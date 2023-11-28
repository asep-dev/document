/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#edf7ff",
                    100: "#d6ebff",
                    200: "#b6deff",
                    300: "#83caff",
                    400: "#49acff",
                    500: "#1f87ff",
                    600: "#0865ff",
                    700: "#014ef4",
                    800: "#093fc4",
                    900: "#0c3183",
                    950: "#0c3183",
                },
                secondary: {
                    50: "#fffcea",
                    100: "#fff3c5",
                    200: "#ffe785",
                    300: "#ffd446",
                    400: "#ffbf1b",
                    500: "#f29400",
                    600: "#e27400",
                    700: "#bb4f02",
                    800: "#983d08",
                    900: "#7c320b",
                    950: "#481800",
                },
            },
        },
    },
    plugins: [],
};

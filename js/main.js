
var config =
{
    "sites":
    [
        { "url": "https://google.com",                                              "text": "G"    },
        { "url": "https://Blutopia.cc",                                              "text": "Blu" },
        { "url": "https://destiny.gg",                                              "text": "d.gg" },
        { "url": "https://twitch.tv",                                               "text": "T.TV" },
        { "url": "https://reddit.com",                                              "text": "R"   },
    ]
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12,
            site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            // d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                // d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }
    });

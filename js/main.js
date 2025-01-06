
var config =
{
    "sites":
    [
        { "url": "https://google.com",                                              "text": "G"    },
        { "url": "https://boards.4chan.org/vg/#catalog",                            "text": "/vg/" },
        { "url": "https://destiny.gg",                                              "text": "d.gg" },
        { "url": "https://twitch.tv",                                               "text": "T.TV" },
        { "url": "http://wiki.teamliquid.net/starcraft2/Main_Page",                "text": "TL"   },
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
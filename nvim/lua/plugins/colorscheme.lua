return {
	{
		"craftzdog/solarized-osaka.nvim",
		lazy = true,
		priority = 1000,
		opts = function()
			return {
				transparent = true,
			}
		end,
	},
	{
		"catppuccin/nvim",
		name = "catppuccin",
		lazy = true,
		priority = 1000,
		---@class CatppuccinOptions
		opts = {
			flavour = "mocha",
			background = "latte",
			transparent_background = true,
		},
	},
	{
		"ellisonleao/gruvbox.nvim",
		name = "gruvbox",
		priority = 1000,
		config = true,
		opts = {
			transparent_mode = true,
		},
	},
}

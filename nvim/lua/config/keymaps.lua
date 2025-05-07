-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

-- escape insert mode
vim.keymap.set("i", "jj", "<ESC>", {})
vim.keymap.set("v", "jj", "<ESC>", {})

-- ctrl + ; to add to end of line
vim.keymap.set("n", "<C-;>", "mzA;<Esc>`z", { noremap = true, silent = true })
vim.keymap.set("i", "<C-;>", "mzA;<Esc>`z", { noremap = true, silent = true })

-- select all
vim.keymap.set("n", "<C-a>", "gg<S-v>G")

May need to create simlinks for ZSH
`ln -s ~/.config/zsh/.zshenv ~`
Spaceship theme, remove simlink if it exists then recreate it 
```
rm ~/.config/zsh/.oh-my-zsh/custom/themes/spaceship.zsh-theme
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```

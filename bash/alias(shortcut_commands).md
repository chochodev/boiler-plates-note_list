# DIRECTORIES
Alias for common commands you use;
The file which bash checks for commands is usually ```.bashrc```, located in ```C:/Users/User/```

**To open explorer (Windows file manager)**
```
alias e='explorer'
```

**To cd frequently used directories**
```
alias work='cd "C:/Users/User/Documents/Workspace"'
# alias projects='cd C:/Users/User/Documents/Projects'
# alias latest='cd C:/Users/User/Documents/Projects/MyLatestProject'
```

# PROJECT DIRECTORIES
```
# Edit to suit your need
# alias image='cd "C:/Users/User/Documents/Projects/image-editor"'
```

# Work Directories
```
# Edit to suit your need
# alias rize='cd "C:/Users/User/Documents/Workspace/Rize-frontend4"'
```

# EDIT & ADD NEW COMMANDS
**To open this shortcut file with nano**
```
alias bashcmd='cd C:/Users/User && nano .bashrc;'
```

# GITHUB
# Initializing
```
alias gi='git init'
```

# Git adding and commit
```
alias gac='git add . && git commit -m ' # + commit message
```

# Pushing/pulling to origin remote
```
alias gpo="git push origin" # + branch name
alias glo="git pull origin" # + branch name
```

# Pushing/pulling to origin remote, main branch
```
alias gpom="git push origin main"
alias glom="git pull origin main"
```

# Branching
```
alias gb="git branch" # + branch name
alias gc="git checkout" # + branch name
alias gcb="git checkout -b" # + branch name
```


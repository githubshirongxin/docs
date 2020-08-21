# npm run build
if [ $? -ne 0 ]; then
   echo "failed"
   exit 8
else
   echo "succeed"
fi

echo "git add -A"
git add -A

echo "git commit "
git commit -m"I update my blog .md again"

echo "git push origin gitlab.ccbjb.com.cn\n"
git push origin 

echo "\n git push origin gitlab.com\n"
git push originRemote

echo "\n git push origin github.com\n"
git push originGithub

exit 0

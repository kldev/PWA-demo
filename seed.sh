update="$(date +'%Y-%m-%d_%H:%M:%S')"

echo "export const ChangeMe = 'Test - ${update}';" > src/Fakechange.ts
cat src/Fakechange.ts

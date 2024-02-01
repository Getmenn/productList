import save from 'save-file'

export default function createFile(fileContent: string) {
    save(fileContent, `остатки.json`);
};
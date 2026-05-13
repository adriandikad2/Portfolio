const fs = require('fs');
const path = require('path');

const directory = 'src';

const replacements = [
  { p: /bg-\[#0a0a0f\]/g, r: 'bg-background' },
  { p: /bg-\[#12121a\]/g, r: 'bg-card' },
  { p: /bg-\[#1a1a2e\]/g, r: 'bg-secondary' },
  { p: /bg-\[#050508\]/g, r: 'bg-background' },
  { p: /border-\[#27272a\]/g, r: 'border-border' },
  { p: /text-\[#e4e4e7\]/g, r: 'text-foreground' },
  { p: /text-\[#71717a\]/g, r: 'text-muted-foreground' },
  { p: /text-\[#a1a1aa\]/g, r: 'text-muted-foreground' },
  { p: /text-\[#52525b\]/g, r: 'text-muted-foreground/70' },
  
  { p: /from-\[#0a0a0f\]/g, r: 'from-background' },
  { p: /via-\[#0a0a0f\]/g, r: 'via-background' },
  { p: /to-\[#0a0a0f\]/g, r: 'to-background' },
  
  { p: /from-\[#12121a\]/g, r: 'from-card' },
  { p: /to-\[#12121a\]/g, r: 'to-card' },
  
  { p: /from-\[#1a1a2e\]/g, r: 'from-secondary' },
  { p: /to-\[#1a1a2e\]/g, r: 'to-secondary' },

  { p: /text-\[#00d4ff\]/g, r: 'text-primary' },
  { p: /bg-\[#00d4ff\]/g, r: 'bg-primary' },
  { p: /border-\[#00d4ff\]/g, r: 'border-primary' },
  { p: /from-\[#00d4ff\]/g, r: 'from-primary' },
  { p: /to-\[#00d4ff\]/g, r: 'to-primary' },
  
  { p: /text-\[#a855f7\]/g, r: 'text-accent' },
  { p: /bg-\[#a855f7\]/g, r: 'bg-accent' },
  { p: /border-\[#a855f7\]/g, r: 'border-accent' },
  { p: /from-\[#a855f7\]/g, r: 'from-accent' },
  { p: /via-\[#a855f7\]/g, r: 'via-accent' },
  { p: /to-\[#a855f7\]/g, r: 'to-accent' },

  { p: /text-\[#818cf8\]/g, r: 'text-chart-4' },
  { p: /bg-\[#818cf8\]/g, r: 'bg-chart-4' },
  { p: /from-\[#818cf8\]/g, r: 'from-chart-4' },
  { p: /via-\[#818cf8\]/g, r: 'via-chart-4' },
  { p: /to-\[#818cf8\]/g, r: 'to-chart-4' },

  { p: /from-\[#6366f1\]/g, r: 'from-chart-5' },
  { p: /to-\[#6366f1\]/g, r: 'to-chart-5' },

  { p: /from-\[#34d399\]/g, r: 'from-chart-3' },
  { p: /to-\[#34d399\]/g, r: 'to-chart-3' },

  { p: /from-\[#f472b6\]/g, r: 'from-chart-2' },
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walkDir(directory);
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  replacements.forEach(r => {
    newContent = newContent.replace(r.p, r.r);
  });
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});

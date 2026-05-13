import os
import re

directory = 'src'
replacements = {
    r'bg-\\[#0a0a0f\\]': 'bg-background',
    r'bg-\\[#12121a\\]': 'bg-card',
    r'bg-\\[#1a1a2e\\]': 'bg-secondary',
    r'bg-\\[#050508\\]': 'bg-background',
    r'border-\\[#27272a\\]': 'border-border',
    r'text-\\[#e4e4e7\\]': 'text-foreground',
    r'text-\\[#71717a\\]': 'text-muted-foreground',
    r'text-\\[#a1a1aa\\]': 'text-muted-foreground',
    r'text-\\[#52525b\\]': 'text-muted-foreground/70',
    r'from-\\[#0a0a0f\\]': 'from-background',
    r'via-\\[#0a0a0f\\]': 'via-background',
    r'to-\\[#0a0a0f\\]': 'to-background',
    r'from-\\[#12121a\\]': 'from-card',
    r'to-\\[#12121a\\]': 'to-card',
    r'from-\\[#1a1a2e\\]': 'from-secondary',
    r'to-\\[#1a1a2e\\]': 'to-secondary',
    # Handle /opacity as well
    r'bg-\\[#0a0a0f\\]/(\\d+)': r'bg-background/\1',
    r'bg-\\[#12121a\\]/(\\d+)': r'bg-card/\1',
    r'border-\\[#27272a\\]/(\\d+)': r'border-border/\1',
    r'from-\\[#0a0a0f\\]/(\\d+)': r'from-background/\1',
    # Primary and Accent
    r'text-\\[#00d4ff\\]': 'text-primary',
    r'bg-\\[#00d4ff\\]': 'bg-primary',
    r'border-\\[#00d4ff\\]': 'border-primary',
    r'from-\\[#00d4ff\\]': 'from-primary',
    r'to-\\[#00d4ff\\]': 'to-primary',
    
    r'text-\\[#a855f7\\]': 'text-accent',
    r'bg-\\[#a855f7\\]': 'bg-accent',
    r'border-\\[#a855f7\\]': 'border-accent',
    r'from-\\[#a855f7\\]': 'from-accent',
    r'via-\\[#a855f7\\]': 'via-accent',
    r'to-\\[#a855f7\\]': 'to-accent',

    r'text-\\[#818cf8\\]': 'text-chart-4',
    r'bg-\\[#818cf8\\]': 'bg-chart-4',
    r'from-\\[#818cf8\\]': 'from-chart-4',
    r'via-\\[#818cf8\\]': 'via-chart-4',
    r'to-\\[#818cf8\\]': 'to-chart-4',

    r'from-\\[#6366f1\\]': 'from-chart-5',
    r'to-\\[#6366f1\\]': 'to-chart-5',

    r'from-\\[#34d399\\]': 'from-chart-3',
    r'to-\\[#34d399\\]': 'to-chart-3',

    r'from-\\[#f472b6\\]': 'from-chart-2',
    
    r'text-\\[#00d4ff\\]/(\\d+)': r'text-primary/\1',
    r'bg-\\[#00d4ff\\]/(\\d+)': r'bg-primary/\1',
    r'border-\\[#00d4ff\\]/(\\d+)': r'border-primary/\1',
    r'from-\\[#00d4ff\\]/(\\d+)': r'from-primary/\1',
    r'to-\\[#00d4ff\\]/(\\d+)': r'to-primary/\1',

    r'bg-\\[#a855f7\\]/(\\d+)': r'bg-accent/\1',
    r'from-\\[#a855f7\\]/(\\d+)': r'from-accent/\1',
    r'via-\\[#a855f7\\]/(\\d+)': r'via-accent/\1',
    r'to-\\[#a855f7\\]/(\\d+)': r'to-accent/\1',
    
    # Glow/effects
    r'rgba\\(0,\\s*212,\\s*255,\\s*([0-9.]+)\\)': r'var(--primary)',
    r'rgba\\(168,\\s*85,\\s*247,\\s*([0-9.]+)\\)': r'var(--accent)',
}

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            # Process specific slash opacities first
            for pattern, repl in replacements.items():
                if '/' in pattern:
                    new_content = re.sub(pattern, repl, new_content)
                    
            # Process the rest
            for pattern, repl in replacements.items():
                if '/' not in pattern:
                    new_content = re.sub(pattern, repl, new_content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {path}')

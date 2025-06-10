# 📝 Portfolio Update Guide

## 🎯 Quick Answer
**Ya, harus build dulu baru push!** Karena website menggunakan file yang sudah di-build, bukan source code langsung.

---

## 🔄 Update Workflow

### **Method 1: Automated Script (Recommended)**
```bash
# Run the automated update script
./update-portfolio.sh
```

### **Method 2: Manual Steps**
```bash
# 1. Edit files in portfolio-nextjs/src/
cd portfolio-nextjs

# 2. Test locally
npm run dev  # Visit http://localhost:3000

# 3. Build project
npm run build

# 4. Deploy
cd ..
rm -rf _next *.html *.js *.svg *.ico *.txt 404/
cp -r portfolio-nextjs/out/* .
touch .nojekyll

# 5. Push to GitHub
git add .
git commit -m "Update: [your changes]"
git push origin master
```

---

## 📁 **Files You'll Commonly Edit**

### **📝 Content Updates**
| File | Purpose |
|------|---------|
| `portfolio-nextjs/src/components/sections/AboutSection.tsx` | Personal info, bio, experience counter |
| `portfolio-nextjs/src/components/sections/ExperienceSection.tsx` | Work history, education timeline |
| `portfolio-nextjs/src/components/sections/ProjectsSection.tsx` | Portfolio projects |
| `portfolio-nextjs/src/components/sections/SkillsSection.tsx` | Technical skills and percentages |
| `portfolio-nextjs/src/components/sections/ContactSection.tsx` | Contact information |

### **🖼️ Images**
- Add new images to: `portfolio-nextjs/public/images/`
- Reference in components as: `/images/your-image.jpg`

### **🎨 Styling**
- Global styles: `portfolio-nextjs/src/app/globals.css`
- Component-specific: Edit className in individual components

---

## 🛠️ **Common Update Scenarios**

### **1. Add New Project**
Edit: `portfolio-nextjs/src/components/sections/ProjectsSection.tsx`

```typescript
const projects = [
  // Add new project here
  {
    title: 'New Project Name',
    subtitle: 'Project Category',
    image: '/images/new-project.png',
    description: 'Project description...',
    link: 'https://project-url.com'
  },
  // ... existing projects
];
```

### **2. Update Experience**
Edit: `portfolio-nextjs/src/components/sections/ExperienceSection.tsx`

```typescript
const experiences = [
  // Add new experience here
  {
    period: "2024 - Present",
    title: "New Company Name",
    position: "Your Position",
    description: "What you do here..."
  },
  // ... existing experiences
];
```

### **3. Update Skills**
Edit: `portfolio-nextjs/src/components/sections/SkillsSection.tsx`

```typescript
const skills = [
  { name: 'New Skill', percentage: 85, color: 'bg-blue-500' },
  // ... existing skills
];
```

### **4. Change Contact Info**
Edit: `portfolio-nextjs/src/components/sections/ContactSection.tsx`

Update phone numbers, email, or social media links.

---

## ⚠️ **Important Rules**

### **✅ DO:**
- Always edit files in `portfolio-nextjs/src/` directory
- Test locally with `npm run dev` before deploying
- Build with `npm run build` before pushing
- Use the automated script for easier updates

### **❌ DON'T:**
- Edit files directly in the root directory (they get overwritten)
- Push without building first
- Delete the `portfolio-nextjs/` directory
- Edit files in `backup-static/` (that's just backup)

---

## 🚀 **Quick Commands Reference**

```bash
# Start development server
cd portfolio-nextjs && npm run dev

# Build for production
cd portfolio-nextjs && npm run build

# Automated update (recommended)
./update-portfolio.sh

# Manual deployment
cd portfolio-nextjs && npm run build && cd .. && rm -rf _next *.html *.js *.svg *.ico *.txt 404/ && cp -r portfolio-nextjs/out/* . && touch .nojekyll && git add . && git commit -m "Update portfolio" && git push origin master
```

---

## 🔧 **Troubleshooting**

### **Build Errors**
```bash
cd portfolio-nextjs
npm run lint  # Check for code errors
npm run build  # See detailed error messages
```

### **Images Not Loading**
- Ensure images are in `portfolio-nextjs/public/images/`
- Use correct path: `/images/filename.jpg` (not `./images/`)
- Rebuild after adding new images

### **Changes Not Appearing**
- Clear browser cache (Ctrl+F5)
- Wait 1-2 minutes for GitHub Pages to update
- Check if build was successful

---

## 📞 **Need Help?**

If you encounter issues:
1. Check the build output for error messages
2. Test locally first with `npm run dev`
3. Ensure all file paths are correct
4. Make sure you're editing the right files in `portfolio-nextjs/src/`

---

## 🎉 **Summary**

**Workflow untuk update:**
1. **Edit** files di `portfolio-nextjs/src/`
2. **Test** dengan `npm run dev`
3. **Build** dengan `npm run build`
4. **Deploy** dengan copy files ke root
5. **Push** ke GitHub

**Atau gunakan script otomatis:**
```bash
./update-portfolio.sh
```

**Website akan update dalam 1-2 menit setelah push!** 🚀

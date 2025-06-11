// Composable para animações de scroll e observer
import { onMounted } from 'vue'

export function useScrollAnimations(isLoaded: any) {
  onMounted(() => {
    setTimeout(() => {
      isLoaded.value = true
    }, 100)

    // Smooth scroll behavior for anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href') as string)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.section, .hero-section')
    sections.forEach(section => observer.observe(section))
  })
}

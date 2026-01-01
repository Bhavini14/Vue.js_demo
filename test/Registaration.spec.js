import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Registration from '@/components/Registration.vue'

describe('Registartion.vue - CRUD Test Cases ', () => {
    
    it('render Registartion form heading', () => {
        const wrapper = mount(Registration)
        expect(wrapper.text()).toContain('User Details')
    })
})
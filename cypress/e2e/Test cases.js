describe('Smoke test a página web/Oferta Omni Pro', () => {
    beforeEach(() => {
        cy.visit('https://myself23.com/')
        cy.wait(500)
    })

    context('Suscripción de usuarios no registrados', () => {
//Test case #1
        it('Verificar que el usuario pueda suscribirse-happy path', () => {
            cy.get('.js-email-wrapper > .js-subs-text-inputs').click().type('pruebaomni1@yopmail.com')
            cy.get('.js-first-name-wrapper > .js-subs-text-inputs').click().type('Test One Omni')
            cy.get('.js-subs-submit-btn').click()
            cy.get('.sgpb-alert-success > p').should('exist').contains(/te has suscrito correctamente al boletín, tu cupon de descuento es el siguiente:/i)
        })
//Test case #2
        it('Verificar que el usuario no se puede suscribir con un email invalido-unhappy path', () => {
            cy.get('.js-email-wrapper > .js-subs-text-inputs').click().type('pruebaomni1')
            cy.get('.js-first-name-wrapper > .js-subs-text-inputs').click()
            cy.get('#sgpb-subs-email-error').should('exist')
        })
//Test case #3
        it('Verificar que el descuento para nuevos suscriptores sea del 10%', () => {
            cy.get('.margen').contains('10%').should('exist')
        })

    context('Registro de usuario nuevo', () => {
//Test case #4
         it('Verificar que aceptar los términos y condiciones sea obligatorio-Unhappy path', () => {
            cy.get('.sgpb-popup-close-button-3').click()
            cy.get('.elementor-sticky--effects > .elementor-container > .elementor-element-8640929 > .elementor-widget-wrap').click()
            cy.location("pathname").should('equal', '/mi-cuenta/')
            cy.get('.woocommerce > .xoo-el-form-container > .xoo-el-header > .xoo-el-tabs > .xoo-el-reg-tgr').click()
            cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo-aff-cont-email > .xoo-aff-input-group > .xoo-aff-required').type('omnitest8@yopmail.com')
            cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_fname_cont > .xoo-aff-input-group > .xoo-aff-required').type('Smoke')
            cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_lname_cont > .xoo-aff-input-group > .xoo-aff-required').type('Test')
            cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_pass_cont > .xoo-aff-input-group > .xoo-aff-required').click().type('Pruebas123*')
            cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_pass_again_cont > .xoo-aff-input-group > .xoo-aff-required').type('Pruebas123*')
            cy.get('.woocommerce > .xoo-el-form-container > .xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .button').click()
            cy.get('.xoo-el-notice-error').should('exist')
        })
//Test case #5
            it('Verificar que el usuario pueda registrarse-Happy path', () => {
                cy.get('.sgpb-popup-close-button-3').click()
                cy.get('.elementor-sticky--effects > .elementor-container > .elementor-element-8640929 > .elementor-widget-wrap').click()
                cy.location("pathname").should('equal', '/mi-cuenta/')
                cy.get('.woocommerce > .xoo-el-form-container > .xoo-el-header > .xoo-el-tabs > .xoo-el-reg-tgr').click()
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo-aff-cont-email > .xoo-aff-input-group > .xoo-aff-required').type('omnitest8@yopmail.com')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_fname_cont > .xoo-aff-input-group > .xoo-aff-required').type('Smoke')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_lname_cont > .xoo-aff-input-group > .xoo-aff-required').type('Test')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_pass_cont > .xoo-aff-input-group > .xoo-aff-required').click().type('Pruebas123*')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_pass_again_cont > .xoo-aff-input-group > .xoo-aff-required').type('Pruebas123*')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo-aff-cont-checkbox_single > div.xoo-aff-required > label > .xoo-aff-required').click()
                cy.get('.woocommerce > .xoo-el-form-container > .xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .button').click()
                cy.get('.xoo-el-notice-success').should('exist')
            })
//Test case #6
            it('Verificar que un usario registrado no pueda volver a registrarse-Unhappy path', () => {
                cy.get('.sgpb-popup-close-button-3').click()
                cy.get('.elementor-sticky--effects > .elementor-container > .elementor-element-8640929 > .elementor-widget-wrap').click()
                cy.location("pathname").should('equal', '/mi-cuenta/')
                cy.get('.woocommerce > .xoo-el-form-container > .xoo-el-header > .xoo-el-tabs > .xoo-el-reg-tgr').click()
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo-aff-cont-email > .xoo-aff-input-group > .xoo-aff-required').type('omnitest8@yopmail.com')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_fname_cont > .xoo-aff-input-group > .xoo-aff-required').type('Smoke')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_lname_cont > .xoo-aff-input-group > .xoo-aff-required').type('Test')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_pass_cont > .xoo-aff-input-group > .xoo-aff-required').click().type('Pruebas123*')
                cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .xoo-aff-fields > .xoo_el_reg_pass_again_cont > .xoo-aff-input-group > .xoo-aff-required').type('Pruebas123*')
                cy.get('.woocommerce > .xoo-el-form-container > .xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .button').click()
                cy.get('.xoo-el-notice-error').should('exist')
            })
        })
    })
})
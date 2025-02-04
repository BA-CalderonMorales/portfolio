import { AppContext } from "@/app/context/index";
import { useContext } from "react";
import { observer } from "mobx-react";
import { BaseSection } from "../shared/BaseSection";
import { ContactSectionViewModel } from "./ContactSectionViewModel";
import "./ContactSection.css";

export const ContactSection = observer((): JSX.Element => {
    const { appViewModel } = useContext(AppContext);
    const viewModel = new ContactSectionViewModel(appViewModel);

    return (
        <BaseSection id="contact-section" className="contact-section">
            <div className="contact-header">
                <h2>{viewModel.title}</h2>
                <p className="contact-subtitle">{viewModel.subtitle}</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-text">
                        {viewModel.contactParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="contact-links">
                        {viewModel.contactLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.url} 
                                className="contact-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className={`fa fa-${link.icon}`}></i> {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={(e) => {
                        e.preventDefault();
                        viewModel.submitForm();
                    }}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={viewModel.formData.name}
                                onChange={(e) => viewModel.updateField('name', e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={viewModel.formData.email}
                                onChange={(e) => viewModel.updateField('email', e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                rows={5}
                                value={viewModel.formData.message}
                                onChange={(e) => viewModel.updateField('message', e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            {viewModel.isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {viewModel.formSubmissionStatus && (
                            <div className={`submission-status ${viewModel.formSubmissionStatus.type}`}>
                                {viewModel.formSubmissionStatus.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </BaseSection>
    );
});

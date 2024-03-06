# Optimizing the Copilot Experience

## Understanding limitations, risks, and common pitfalls

### Quality and Maintainability of Generated Code

While AI-generated code can be useful, it may not always meet the same standards as code written by an experienced developer. The generated code might be inefficient or hard to read, or even contain functional issues, driving up long-term maintenance costs and increasing technical debt.

In addition, generated code may lack proper documentation and comments, making it difficult for other developers to understand its functionality. It's essential to document the code properly and add comments to improve readability and maintainability.

In addition, as AI tools evolve and compete, the specific AI tool which generated the code may change or become unavailable. Dependencies on a specific tool should be reduced or eliminated wherever possible.

---
transition: fade-out
---

### Security Risks

Generated code might introduce security vulnerabilities. Developers need to thoroughly review the generated code to ensure it follows security best practices and doesn't introduce any vulnerabilities like injection attacks, authentication flaws, or data leaks. The need for regular vulnerability and dependency scans (ideally on every commit) is amplified for projects which will contain generated code.

### License Compliance

The code generated by AI tools might include code snippets from various sources, each with its own licensing terms. Developers need to be cautious about the licenses associated with the generated code to ensure compliance with legal requirements and avoid potential licensing conflicts.

### Deskilling and Overreliance

There is a cultural risk of developers becoming overly reliant on AI-generated code, which can lead to a dependency on the tool rather than fostering problem-solving and coding skills. This is especially true for less experienced developers. It is important to find ways to get the benefit AI assistance while still developing one's own coding abilities.

---
transition: fade-out
---

### Bias and Ethics

AI models trained on existing code repositories may inadvertently perpetuate biases present in the training data. Developers should be mindful of potential bias in the generated code, especially when dealing with sensitive topics or applications.

### Performance Considerations

Generated code might not be optimized for performance. Developers who understand the performance characteristics of the larger systems must review and optimize the generated code to ensure it meets the required performance standards, especially in resource-intensive applications.

---
transition: fade-out
---

## Context and Prompt Engineering

[Prompt engineering](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/) is the process of crafting specific prompts or input queries for AI models to generate desired outputs. 

### Clear Problem Statement

Provide a clear and concise problem statement in your prompt. Clearly outline what you're trying to achieve and any specific requirements or constraints.

### Contextual Information

Include relevant context information in your prompt to help GitHub Copilot understand the problem better. This could include variable names, function signatures, data types, or example inputs and outputs.

### Modular Prompts

Break down complex problems into smaller, more manageable prompts. This can help GitHub Copilot generate more accurate and relevant code snippets for each specific task.

---
transition: fade-out
---

### Specific Keywords

Use specific keywords or phrases related to the problem domain in your prompt. This can help GitHub Copilot better understand the problem and generate more contextually relevant code.

### Example Code Snippets

Provide example code snippets or partial implementations in your prompt to guide GitHub Copilot in generating the desired code. This can help ensure that the generated code aligns with your expectations and coding style.

### Feedback Loop

Continuously review and provide feedback on the generated code to improve its accuracy and relevance over time. GitHub Copilot learns from user interactions, so the more feedback you provide, the better it becomes at generating code tailored to your needs.

### Code Reviews

Always conduct thorough code reviews of the generated code before integrating it into your project. This helps catch any potential issues, such as security vulnerabilities, performance bottlenecks, or code quality issues.

---
transition: fade-out
---

### Documentation and Comments

Ensure that the generated code is well-documented and includes appropriate comments to improve readability and maintainability. Add comments to explain the purpose of each code block, function, or variable.

### Testing

Test the generated code thoroughly to ensure that it functions correctly and meets the desired requirements. Write unit tests or integration tests to validate the behavior of the code in different scenarios.

### Version Control

Use version control systems like Git to track changes to your codebase, including any code generated by GitHub Copilot. This allows you to revert changes if needed and collaborate with other developers more effectively.

---
transition: fade-out
---

## Microsoft’s 4 S’s

- **Single**: Always focus your prompt on a single, well-defined task or question. This clarity is crucial for eliciting accurate and useful responses from Copilot.
- **Specific**: Ensure that your instructions are explicit and detailed. Specificity leads to more applicable and precise code suggestions.
- **Short**: While being specific, keep prompts concise and to the point. This balance ensures clarity without overloading Copilot or complicating the interaction.
- **Surround**: Utilize descriptive filenames and keep related files open. This provides Copilot with rich context, leading to more tailored code suggestions.

---
transition: fade-out
---

## Code review and quality assurance with Copilot

### Advantages:

- **Increased Efficiency**: GitHub Copilot can automate parts of the code review process, saving time for developers and allowing them to focus on more critical aspects of the review.
- **Consistency**: Copilot can provide consistent feedback and suggestions based on established coding standards and best practices, ensuring that code reviews maintain a certain level of quality and consistency across the codebase.
- **Augmented Expertise**: Copilot's AI capabilities can augment the expertise of developers by providing insights and suggestions that they might not have considered otherwise, leading to improved code quality and adherence to coding standards.

---
transition: fade-out
---

### Disadvantages:

- **Overreliance**: There's a risk that developers may become overly reliant on Copilot for code reviews, potentially overlooking critical issues or blindly accepting its suggestions without proper review and validation.
- **Quality of Suggestions**: While Copilot can provide valuable suggestions, the quality of its recommendations may vary, and it may occasionally produce incorrect or suboptimal suggestions that need to be carefully reviewed by developers.
- **Lack of Domain Understanding**: Copilot's AI model may lack domain-specific understanding, leading to inaccurate or irrelevant suggestions in certain contexts, especially for specialized or niche domains.

---
transition: fade-out
---

### Risks:

- **Security Vulnerabilities**: Copilot-generated code may inadvertently introduce security vulnerabilities if not thoroughly reviewed and validated during the code review process, posing a risk to the overall security of the application.
- **License Compliance**: Copilot may generate code snippets that inadvertently violate licensing agreements or infringe on intellectual property rights, leading to legal risks and potential liabilities for the project.
- **Bias and Ethics**: Copilot's AI model may inadvertently perpetuate biases present in the training data, leading to biased recommendations or reinforcing existing stereotypes, which can have ethical implications for the project.
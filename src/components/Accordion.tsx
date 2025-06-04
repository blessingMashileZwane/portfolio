import {
    Accordion as BaseAccordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
    data: {
        title: string;
        description: string;
        content: any;
        tableate?: boolean;
    }[];
}

interface MarkdownRendererProps {
    html: string;
    tableate?: boolean;
}

export function Accordion({ data }: Props) {
    return (
        <BaseAccordion type="single" collapsible className="w-full">
            {data.map((item, i) => {
                return (
                    <AccordionItem value={`item-${i.toFixed()}`}>
                        <AccordionTrigger><strong><i>{item.title}</i></strong></AccordionTrigger>
                        <AccordionContent><MarkdownRenderer html={item.content} tableate={item.tableate} /></AccordionContent>

                    </AccordionItem>
                );
            })}
        </BaseAccordion>
    );
}

function MarkdownRenderer({ html, tableate }: MarkdownRendererProps) {
    return (
        <div className={tableate ? 'skills-table-wrapper' : ''}>
            {tableate && (
                <style>{`
                    .skills-table-wrapper table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .skills-table-wrapper td, .skills-table-wrapper th {
                        padding: 0.5rem;
                        text-align: center;
                    }
                    @media (max-width: 1023px) {
                        .skills-table-wrapper td, .skills-table-wrapper th {
                            width: 50%;
                        }
                        .skills-table-wrapper tr {
                            display: flex;
                            flex-wrap: wrap;
                        }
                        .skills-table-wrapper td, .skills-table-wrapper th {
                            flex: 0 0 50%;
                        }
                    }
                    @media (min-width: 1024px) {
                        .skills-table-wrapper td, .skills-table-wrapper th {
                            width: 25%;
                        }
                        .skills-table-wrapper tr {
                            display: table-row;
                        }
                        .skills-table-wrapper td, .skills-table-wrapper th {
                            flex: none;
                        }
                    }
                `}</style>
            )}
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}
